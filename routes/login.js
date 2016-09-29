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
        console.log("fail")
        res.redirect('/');
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


  return app;
}
