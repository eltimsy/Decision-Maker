'use strict';

/* The checkVoter function checks to see whether a potential voter email has
already been logged, or else sends on the query to be registered as a vote.
Input is an object of the following form: {
  email: 'sample@example.com',
  question_id: '45',
  preferences: [ '111', '110', '109', '108' ]
} */

module.exports = function checkVoter(db, query) {
  return new Promise((resolve, reject) => {
    db('voter_emails')
      .where({
        voter_email: query.email,
        question_id: query.question_id
      })
      .select('voted')
      .then((hasVoted) => {
        if (hasVoted.length === 0) {
          resolve(true);
        } else if (hasVoted[0].voted) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        reject(error);
      })
  })
}
