"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const session     = require('express-session');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

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
}))

app.set("view engine", "ejs");
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
  req.session.user = req.body.username;
  req.session.password = req.body.password;
  console.log(req.session);
  res.end();
})

app.get('/auth', (req, res) => {
  res.json({
    username: req.session.user,
    password: req.session.password});
})

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/main", (req, res) => {
  console.log("trying to reach main")
  res.render("main");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
