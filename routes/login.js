"use strict";
const bcrypt  = require('bcrypt-nodejs');
const express = require('express');
const app  = express.Router();

module.exports = (knex) => {
  app.post('/login', (req, res) => {
    let user = req.body.username;
    let password = req.body.password;
    knex.select('username','password','user_id').from('users').where({
      username: user
    }).then(function(resp) {
      if(resp.length < 1) {
        res.send('fail');
      } else {
        bcrypt.compare(password, resp[0].password, function(err, response) {
          if(response == true) {
            req.session.auth = true;
            req.session.username = resp[0].username;
            req.session.userid = Number(resp[0].user_id);
            res.redirect('/main');
          } else {
            res.send('fail');
          }
        });
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
  let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  let entry = {
    username: req.body.username,
    email: req.body.email,
    password: password
  };
  function registerNewUser(entry){
    const insertNewUsername = (entry) => {
      knex('users').insert(entry)
      .returning('user_id')
      .then((resp) => {
        req.session.auth = true;
        req.session.username = req.body.username;
        req.session.userid = Number(resp);
        res.send('success');
      });
    };

    knex('users')
    .where({username: entry.username})
    .select()
    .then((result) => {
      if (result.length > 0) {
        console.log("This name is already taken!");
        res.send('fail');
      } else {
        insertNewUsername(entry);
      }
    });
  };

  registerNewUser(entry);
});

  return app;
};
