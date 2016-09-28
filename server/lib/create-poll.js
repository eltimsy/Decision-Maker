'use strict';

const generateRandomString = require('./random-string');

module.exports = function createPollQuestion(db, user, pollInput) {
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
    // .returning(question_id)
    // .then(console.log('success?!?'))
    .catch((error) => {console.log(error);});
  // console.log(question)
}

function createPollChoices(db, question, pollInput) {

}
