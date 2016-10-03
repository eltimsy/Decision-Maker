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
const graph       = require('./routes/graph');
const borda       = require('./server/lib/borda-count.js');

app.use(morgan('dev'));

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

// Home page
app.use('/home', login(knex));
app.use('/', graph(knex));

app.get("/", (req, res) => {
  if(req.session.auth === true){
    res.redirect('/main');
  } else {
    res.render("index", {
      username: 'Guest'
    });
  }
});

app.get('/auth', (req, res) => {
  if(req.session.auth === true) {
    res.redirect('/main');
  } else {
    res.redirect('/');
  }
});

/* Input to createpoll:
  { question: 'afsdafdsafdsafsd',
  choices: [ 'fasdafsdfasdfasd', 'afsdfsaafsdsadf' ],
  emails:
   [ 'fadafsdfd',
     'fadsafsdfads',
     'afsdsfdasfd',
     'afsasdfafsd',
     'afdsasdfafsd' ] }
 */

app.post("/createpoll", (req, res) => {
  const userId = req.session.userid;
  createPoll(knex, userId, req.body)
    .then(response => {
      knex.select()
        .from('users')
        .innerJoin('questions', 'users.user_id', "questions.user_id")
        .where({'users.user_id': userId})
        .orderBy('question_id', 'desc')
        .first('email', 'admin_url', 'poll_url')
        .then((result) => {
          sendCongratsEmail(result['email'], result['admin_url'], result['poll_url']);
          res.redirect(303, "/main");
        });
      })
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
              res.send('success');
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
    knex.select('question', 'question_id', 'admin_url')
      .from('questions')
      .where('user_id', req.session.userid)
      .orderBy('question_id', 'desc')
      .then(function(result) {
        const liveQuestions = result.map((value) => {
          return [value.question,value.admin_url];
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


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

function sendCongratsEmail(email, admin_url, poll_url){
  var data = {
    from: 'RocketVoters <rocketvoters@rendition.club>',
    to: email,
    subject: "Here are the links for your new poll:",
    text: `See your poll here: ${admin_url} \n
           Invite your friends to vote here: localhost:8080/polls/voter/${poll_url}`
  };
  mailgun
    .messages()
    .send(data, function (error, body) {
      console.log(body);
    });
}
