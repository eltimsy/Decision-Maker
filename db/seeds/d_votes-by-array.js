exports.seed = function (knex, Promise) {
  return knex('votes_by_array')
    .del()
    .then(function () {
      return Promise.all([
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [5, 4, 3, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 3,
          preferences: [1, 2, 3, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [5, 3, 4, 2, 1]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [2, 1, 3, 4, 5]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [1, 3, 5, 4, 2]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [1, 4, 5, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [5, 2, 3, 1, 4]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [5, 4, 2, 3, 1]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [4, 2, 3, 1, 5]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [7, 8, 6]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [5, 4, 2, 1, 3]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [4, 5, 1, 2, 3]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [3, 2, 1, 5, 4]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [8, 7, 6]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 2,
          preferences: [7, 6, 8]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 3,
          preferences: [11, 9, 10]
        }),
        knex('votes_by_array')
        .insert({
          question_id: 1,
          preferences: [1, 4, 2, 5, 3]
        })
      ]);
    });
};
