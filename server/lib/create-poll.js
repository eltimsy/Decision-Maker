'use strict';

const generateRandomString = require('./random-string');

// createPollQuestion takes in the knex object, a user_id, and form
// data (to create a new poll); then writes the question to the
// question table, and proceeds to write the associated choices to
// the choices table. TODO: accommodate descriptions (this should
// wait until the form also passes description data).

module.exports = function createPollQuestion(db, user, pollInput) {
  return new Promise((resolve, reject) => {
    let pollEmails = {};
    const question = pollInput.question;
    delete pollInput.question;
    const qRow = {
      question: question,
      admin_url: `${generateRandomString(12)}`,
      poll_url: `${generateRandomString(12)}`,
      user_id: user
    };
    db('questions')
      .insert(qRow)
      .returning('question_id')
      .then((newId) => {
        for (let email of pollInput.emails) {
          let eRow = {
            voter_email: email,
            voted: false,
            question_id: newId[0]
          }
          db('voter_emails')
            .insert(eRow)
            .then((results) => {
              resolve(results);
            })
            .catch((error) => {reject(error);});
        }
        for (var i = 0; i < pollInput.choices.length; i++) {
          let cRow = {
            choice_name: pollInput.choices[i],
            description: pollInput.description[i],
            question_id: newId[0]
          }
          db('choices')
            .insert(cRow)
            .then((results) => {
              resolve(results);
            })
            .catch((error) => {reject(error);});
        }
      })
  });
}
