'use strict';

module.exports = function regVote(db, pollVote) {
  return new Promise((resolve, reject) => {
    db('votes_by_array')
      .insert(pollVote)
      .returning('vote_id')
      .then((vote_id) => {
        resolve(vote_id);
      })
      .catch((error) => {
        reject(error);
      })
    });
}
