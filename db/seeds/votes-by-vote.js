// Currently incomplete: more rows needed to replicate data
// from votes-by-array.js; preferences retained to keep data
// the same across the different structures.

exports.seed = function (knex, Promise) {
  return knex('votes_by_array')
    .del()
    .then(function () {
      return Promise.all([
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [5, 4, 3, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [1, 2, 3, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [5, 3, 4, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [2, 1, 3, 4, 5]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [1, 3, 5, 4, 2]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [1, 4, 5, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [5, 2, 3, 1, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [5, 4, 2, 3, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [4, 2, 3, 1, 5]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [7, 8, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [5, 4, 2, 1, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [4, 5, 1, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [11, 9, 10]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          vote_value: INT,
          question_id: 1,
          choice_id:
          // preferences: [1, 4, 2, 5, 3]
        })
      ]);
    });
};
