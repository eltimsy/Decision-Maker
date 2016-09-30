'use strict';

/* Input looks as below:
{
  email: 'sample@example.com',
  question_id: '45',
  preferences: [ '111', '110', '109', '108' ]
}
*/

module.exports = function regVote(db, pollVote) {
  const makeVote = new Promise((resolve, reject) => {
    db('votes_by_array')
      .insert({
        question_id: pollVote.question_id,
        preferences: pollVote.preferences
      })
      .returning('vote_id')
      .then((vote_id) => {
        resolve(vote_id);
      })
      .catch((error) => {
        reject(error);
      })
    });
  const writeVote = new Promise((resolve, reject) => {
    db('voter_emails')
      .insert({
        voter_email: pollVote.email,
        question_id: pollVote.question_id,
        voted: true
      })
      .returning('ve_id')
      .then((ve_id) => {
        resolve(ve_id);
      })
      .catch((error) => {
        reject(error);
      })
  })
  return Promise.all([makeVote, writeVote]);
}
