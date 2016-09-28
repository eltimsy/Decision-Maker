exports.seed = function (knex, Promise) {
  return knex('choices')
    .del()
    .then(function () {
      return Promise.all([
        knex('choices')
        .insert({
          choice_id: 1,
          choice_name: 'Burger King',
          description: 'It has burgers.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_id: 2,
          choice_name: 'McDonalds',
          description: 'Also has burgers.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_id: 3,
          choice_name: 'Pizzaiolo',
          description: 'Pizza here.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_id: 4,
          choice_name: 'Panera',
          description: 'Soup and breads.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_id: 5,
          choice_name: 'Runza',
          description: 'It has Runzas.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_id: 6,
          choice_name: 'Hacker McHackerson',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_id: 7,
          choice_name: 'Abraham Lincoln',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_id: 8,
          choice_name: 'Mahatma Ghandi',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_id: 9,
          choice_name: 'Abraham Lincoln',
          description: 'An Honest Man',
          question_id: 3
        }),
        knex('choices')
        .insert({
          choice_id: 10,
          choice_name: 'Franklin Roosevelt',
          description: 'Beloved!',
          question_id: 3
        }),
        knex('choices')
        .insert({
          choice_id: 11,
          choice_name: 'William Henry Harrison',
          description: 'Short lived!',
          question_id: 3
        })
      ]);
    });
};
