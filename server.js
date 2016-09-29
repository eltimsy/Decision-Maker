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
// const pgSession   = require('connect-pg-simple')(session);
const createPoll  = require('./server/lib/create-poll');
// const registerNewUser = require('./server/lib/register.js');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

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

app.post('/logout', (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  })

});

app.post('/login', (req, res) => {
  console.log(req.body)
  let user = req.body.username;
  let password = req.body.password;
  knex.select('username','password','user_id').from('users').where({
    username: user,
    password: password
  }).then(function(resp) {
    if(resp.length < 1) {
      console.log("fail")
      res.redirect('/');
    } else {
      req.session.auth = true;
      req.session.username = req.body.username;
      req.session.userid = req.body.user_id;
      console.log(resp);
      console.log("success!");
      res.redirect('/main');
    }

  });
});

app.get('/auth', (req, res) => {
  if(req.session.auth === true) {
    res.redirect('/main');
  } else {
    res.redirect('/');
  }
});

app.post('/register', (req, res) => {
  let entry = {
    firstname: 'joe',
    lastname: 'doe',
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  function registerNewUser(entry){
    const insertNewUsername = (entry) => {
      knex('users').insert(entry)
      // .returning(user_id)
      .then(() => {
          res.redirect(303, '/main');
      });
    };

    knex('users')
    .where({username: entry.username})
    .select()
    .then((result) => {
      if (result.length > 0) {
        //todo: create a flash message;
        console.log("This name is already taken!");
        res.redirect(303, '/')
      } else {
        insertNewUsername(entry);
      }
    });
  };
  registerNewUser(entry);
});

app.post("/createpoll", (req, res) => {
  createPoll(knex, req.session.user, req.body);
  res.redirect(303, "/main");
})

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

app.get("/main", (req, res) => {
//todo: get user_id from cookie and assign values here
  if(req.session.auth === true){
    knex.select('question')
      .from('questions')
      .where('user_id', 2)
      .then(function(result) {
        res.render("main", {
          questions: result
        });
    });
  } else {
    res.redirect('/');
  }

});

app.get("/new", (req, res) => {
  res.render("new", {
    userName: req.session.user
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
