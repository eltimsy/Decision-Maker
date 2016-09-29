exports.seed = function (knex, Promise) {
  return knex('choices')
    .del()
    .then(function () {
      return Promise.all([
        knex('choices')
        .insert({
          choice_name: 'Burger King',
          description: 'It has burgers.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_name: 'McDonalds',
          description: 'Also has burgers.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_name: 'Pizzaiolo',
          description: 'Pizza here.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_name: 'Panera',
          description: 'Soup and breads.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_name: 'Runza',
          description: 'It has Runzas.',
          question_id: 1
        }),
        knex('choices')
        .insert({
          choice_name: 'Hacker McHackerson',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_name: 'Abraham Lincoln',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_name: 'Mahatma Ghandi',
          description: null,
          question_id: 2
        }),
        knex('choices')
        .insert({
          choice_name: 'Abraham Lincoln',
          description: 'An Honest Man',
          question_id: 3
        }),
        knex('choices')
        .insert({
          choice_name: 'Franklin Roosevelt',
          description: 'Beloved!',
          question_id: 3
        }),
        knex('choices')
        .insert({
          choice_name: 'William Henry Harrison',
          description: 'Short lived!',
          question_id: 3
        })
      ]);
    });
};
