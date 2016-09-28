exports.seed = function (knex, Promise) {
  return knex('votes_by_array')
    .del()
    .then(function () {
      return Promise.all([
        knex('votes_by_array')
        .insert({
          vote_id: 1,
          question_id: 1,
          preferences: [5, 4, 3, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 2,
          question_id: 3,
          preferences: [1, 2, 3, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 3,
          question_id: 1,
          preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 4,
          question_id: 1,
          preferences: [5, 3, 4, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 5,
          question_id: 1,
          preferences: [2, 1, 3, 4, 5]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 6,
          question_id: 1,
          preferences: [1, 3, 5, 4, 2]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 7,
          question_id: 1,
          preferences: [1, 4, 5, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 8,
          question_id: 1,
          preferences: [5, 2, 3, 1, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 9,
          question_id: 1,
          preferences: [5, 4, 2, 3, 1]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 10,
          question_id: 1,
          preferences: [4, 2, 3, 1, 5]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 11,
          question_id: 2,
          preferences: [7, 8, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 12,
          question_id: 1,
          preferences: [5, 4, 2, 1, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 13,
          question_id: 2,
          preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 14,
          question_id: 1,
          preferences: [4, 5, 1, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 15,
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 16,
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 17,
          question_id: 1,
          preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 18,
          question_id: 2,
          preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 19,
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 20,
          question_id: 3,
          preferences: [11, 9, 10]
        }),
        knex('votes_by_array')
        .insert({
          vote_id: 21,
          question_id: 1,
          preferences: [1, 4, 2, 5, 3]
        })
      ]);
    });
};
