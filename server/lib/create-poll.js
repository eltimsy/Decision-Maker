'use strict';

const generateRandomString = require('./random-string');

// createPollQuestion takes in the knex object, a user_id, and form
// data (to create a new poll); then writes the question to the
// question table, and proceeds to write the associated choices to
// the choices table. TODO: accommodate descriptions (this should
// wait until the form also passes description data).

module.exports = function createPollQuestion(db, user, pollInput) {
  const question = pollInput.question;
  console.log(pollInput)
  delete pollInput.question;
  delete pollInput['newpoll-submit'];
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
      for (let choice in pollInput) {
        let cRow = {
          choice_name: pollInput[choice],
          description: '',
          question_id: newId[0]
        }
        db('choices')
          .insert(cRow)
          .catch((error) => {console.log(error);});
      }
    })
    .catch((error) => {console.log(error);});
}
