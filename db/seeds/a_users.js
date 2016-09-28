exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          user_id: 1,
          firstname: 'Alice',
          lastname: 'Smith',
          email: 'alice@goodmail.com',
          password: 'password'
        }),
        knex('users')
        .insert({
          user_id: 2,
          firstname: 'Jim',
          lastname: 'Thomson',
          email: 'jim@goodmail.com',
          password: '3123d9f'
        }),
        knex('users')
        .insert({
          user_id: 3,
          firstname: 'Franklin',
          lastname: 'Roosevelt',
          email: 'fdr@europe.com',
          password: 'whatever'
        }),
        knex('users')
        .insert({
          user_id: 4,
          firstname: 'Jane',
          lastname: 'White',
          email: 'jwhite@placeholder.net',
          password: 'isThisRE3llyNE33d3D'
        }),
        knex('users')
        .insert({
          user_id: 5,
          firstname: 'Abraham',
          lastname: 'Lincoln',
          email: 'abe@logcabin.gov',
          password: 'abracadabra'
        })
      ]);
    });
};
