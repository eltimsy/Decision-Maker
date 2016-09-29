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

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const login        = require('./routes/login');

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
}))

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

app.post('/register', (req, res) => {
  let entry = {
    firstname: 'Johnson',
    lastname: 'Doe',
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  knex('users').insert(entry)
  .returning('user_id')
  .then((user_id) => {
      res.redirect(303, '/main');
  });
});

app.post("/createpoll", (req, res) => {
  console.log(req.session.userid)
  createPoll(knex, req.session.userid, req.body);
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
  if(req.session.auth === true) {
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
  if(req.session.auth === true) {
    res.render("new", {
      userName: req.session.user
    });
  } else {
    res.redirect('/');
  }

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
