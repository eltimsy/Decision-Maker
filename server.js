"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const session     = require('express-session');

const api_key     = process.env.mailgun_api_key;
const domain      = process.env.mailgun_domain;
const email       = process.env.mailgun_email;
const mailgun     = require('mailgun-js')({apiKey: api_key, domain: domain});
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const createPoll  = require('./server/lib/create-poll');
const getPoll     = require('./server/lib/get-poll');
const regVote     = require('./server/lib/register-votes');
const checkVoter  = require('./server/lib/check-voter');

// Seperated Routes for each Resource
const login       = require('./routes/login');
const borda       = require('./server/lib/borda-count.js');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(session({
  cookieName: 'session',
  secret: 'crazy person',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  resave: false,
  saveUninitialized: true,
}));

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));


app.use(express.static("public"));

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  console.log(req.session.username)
  if(req.session.auth === true){
    res.redirect('/main');
  } else {
    res.render("index");
  }
});

app.use('/home', login(knex));

app.get('/auth', (req, res) => {
  if(req.session.auth === true) {
    res.redirect('/main');
  } else {
    res.redirect('/');
  }
});


app.post("/createpoll", (req, res) => {
  createPoll(knex, req.session.userid, req.body);
  setTimeout(function(){res.redirect(303, "/main");},1000);

  function sendCongratsEmail(email, admin_url, poll_url){
    var data = {
      from: 'RocketVoters <rocketvoters@rendition.club>',
      to: email,
      subject: "Congrats!Here are the links for your new poll!",
      text: `See your poll here: ${admin_url} \n
             Invite your friends to vote here: localhost:8080/polls/voter/${poll_url}`
    };
    mailgun
      .messages()
      .send(data, function (error, body) {
        console.log(body);
      });
  }

  var userId = req.session.userid;
  console.log('for createpoll post, userID is:', userId);
  knex.select()
    .from('users')
    .innerJoin('questions', 'users.user_id', "questions.user_id")
    .where({'users.user_id': userId})
    .orderBy('question_id', 'desc')
    .first('email', 'admin_url', 'poll_url')
    .then((result) => {
      sendCongratsEmail(result['email'], result['admin_url'], result['poll_url']);
    });
  });

app.post("/email", (req, res) => {
  var data = {
    from: `${req.body.name} <${email}>`,
    to: req.body.mail,
    subject: "It's a URL",
    text: req.body.comment
  }
  mailgun.messages()
    .send(data, function (error, body) {
      console.log(body);
      res.redirect(303,"/");
    })
})

/* Explanation of the (slight) callback hell below. The ajax call from the
poll heads to this route, which first will check the email address for
validity (function checkVoter), and then will submit the vote (function
regVote). */

app.route("/polls/voter/:id")
  .get((req, res) => {
    const path_id = req.params.id;
    getPoll(knex, path_id)
      .then((result) => {
        console.log(result)
        res.render("takepoll", {
          result: result,
          username: req.session.username || 'Guest'
        });
      })
      .catch((error) => {
        console.log(`Poll could not be recovered: ${error}.`);
      });
  })
  .post((req, res) => {
    checkVoter(knex, req.body)
      .then((result) => {
        if (result) {
          res.send(result);
        } else {
          regVote(knex, req.body)
            .then((result) => {
              res.send(false);
            })
            .catch((error) => {
              console.log(error);
              res.redirect(500, "/main");
            })
        }
      })
      .catch((error) => {
        console.log(error);
        res.redirect(500, "/main");
      })
  })

app.get("/main", (req, res) => {
  if(req.session.auth === true) {
    knex.select('question', 'question_id')
      .from('questions')
      .where('user_id', req.session.userid)
      .orderBy('question_id', 'desc')
      .then(function(result) {
        const liveQuestions = result.map((value) => {
          return value.question;
        });
        res.render("main", {
          questions: liveQuestions,
          username: req.session.username
        });
    });
  } else {
    res.redirect('/');
  }

});

app.get("/new", (req, res) => {
  if(req.session.auth === true) {
    res.render("new", {
      username: req.session.username
    });
  } else {
    res.redirect('/');
  }
});

app.post("/graph", (req, res) => {
  let result = [];
  let choices = [];
  let poll = [];
  let max = 0;
  let name = "";
  let pollquestion = Object.keys(req.body);
  let pollurl = "";
  let questionid = "";

  knex.select('poll_url', 'question_id').from('questions').where({
    question: pollquestion[0]
  }).then(function(resp) {
    pollurl = resp[0].poll_url;
    questionid = resp[0].question_id;

    getPoll(knex, pollurl).then(
      function(resp){
        poll = resp;

        knex.select().from('votes_by_array').where({
          question_id: questionid
        }).then(function(resp) {
          result = borda.bordaCount(questionid, resp);
          for(let key in result) {
            poll.choices.forEach(function(index){
              if(key === index.choice_id){
                choices.push(index.choice_name);
                if(max < result[key]){
                  max = result[key];
                  name = index.choice_name;
                }
              }
            });
          }

          let vote = Object.keys(result).map(function (key) {
            return result[key];
          });
          res.send([vote, choices, poll.question, name])
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
