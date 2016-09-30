"use strict";

const express = require('express');
const app  = express.Router();

module.exports = (knex) => {
  app.post('/login', (req, res) => {
    console.log(req.body)
    let user = req.body.username;
    let password = req.body.password;
    knex.select('username','password','user_id').from('users').where({
      username: user,
      password: password
    }).then(function(resp) {
      if(resp.length < 1) {
        res.send('fail');
      } else {
        req.session.auth = true;
        req.session.username = resp[0].username;
        req.session.userid = Number(resp[0].user_id);
        res.redirect('/main');
      }
    });
  });

  app.post('/logout', (req, res) => {
    req.session.destroy(function(err) {
      res.redirect('/');
    })
  });
//
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
      .returning('user_id')
      .then((resp) => {
        console.log(req.body.username);
        req.session.auth = true;
        req.session.username = req.body.username;
        req.session.userid = Number(resp);
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

//
  return app;
};
