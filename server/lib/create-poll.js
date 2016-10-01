'use strict';

const generateRandomString = require('./random-string');

// createPollQuestion takes in the knex object, a user_id, and form
// data (to create a new poll); then writes the question to the
// question table, and proceeds to write the associated choices to
// the choices table. TODO: accommodate descriptions (this should
// wait until the form also passes description data).

module.exports = function createPollQuestion(db, user, pollInput) {
  const questionProm = new Promise((resolve, reject) => {
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
        for (let email in pollInput.emails) {
          let eRow = {
            voter_email: email,
            voted: false,
            question_id: newId[0]
          }
          db('voter_emails')
            .insert(eRow)
            .catch((error) => {console.log(error);});
        }
      })
    });
  const choiceProm = new Promise((resolve, reject) => {
    for (let choice in pollInput.choices) {
      let cRow = {
        choice_name: pollInput.choices[choice],
        description: '',
        question_id: newId[0]
      }
      db('choices')
        .insert(cRow)
        .catch((error) => {console.log(error);});
    }
  });
  return Promise.all([questionProm, choiceProm]);
}
