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
const pgSession   = require('connect-pg-simple')(session);

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(session({
  store: new pgSession({
    conString: `postgres://tdlsuzdayfdcbb:x20mJq8t4mA3kSRuVedcvGAJJx@ec2-54-235-124-2.compute-1.amazonaws.com:5432/d24a3u7jlcmstb`,
    tableName: 'session'
  }),
  cookieName: 'session',
  secret: 'crazy person',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  resave: false,
  saveUninitialized: true,
}))

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/logout', (req, res) => {
  req.session.user = null;
  res.end();
});

app.post('/login', (req, res) => {
  console.log(req.body)
  req.session.user = req.body.user;
  req.session.password = req.body.password;
  res.redirect('/main');
})

app.get('/auth', (req, res) => {
  res.json({
    username: req.session.user,
    password: req.session.password});
})

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/createpoll", (req, res) => {
  console.log(req.body);
  res.end();
})

app.post("/email", (req, res) => {
  var data = {
    from: `${req.body.name} <${email}>`,
    to: req.body.mail,
    subject: "It's a URL",
    text: req.body.comment
  }
  mailgun.messages().send(data, function(error, body) {
    console.log(body);
    res.redirect("/");
  })

})



app.get("/main", (req, res) => {
  console.log("trying to reach main")
  res.render("main");
});

app.get("/new", (req, res) => {
  res.render("new", {
    userName: req.session.user
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
