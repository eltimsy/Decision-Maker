"use strict";
const express = require('express');
const app  = express.Router();
const getPoll     = require('../server/lib/get-poll');
const borda       = require('../server/lib/borda-count.js');

module.exports = (knex) => {
  //1becruzvqd95

  app.get("/:id", (req, res) =>{
    let result = [];
    let choices = [];
    let poll = [];
    let max = 0;
    let name = "";
    let pollquestion = Object.keys(req.body);
    let pollurl = "";
    let questionid = "";

    const path_id = req.params.id;
    console.log(path_id)
    knex.select('poll_url', 'question_id').from('questions').where({
      admin_url: path_id
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
            console.log(vote, choices)
            res.render('admingraph', {
              choices: JSON.stringify(choices),
              vote: vote,
              question: JSON.stringify(poll.question),
              winner: name,
              username: 'Guest'
            });
            //res.end([vote, choices, poll.question, name])
          });
        }
      );
    })
  })


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

  return app;
};
