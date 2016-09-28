exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          firstname: 'Alice',
          lastname: 'Smith',
          email: 'alice@goodmail.com',
          password: 'password'
        }),
        knex('users')
        .insert({
          firstname: 'Jim',
          lastname: 'Thomson',
          email: 'jim@goodmail.com',
          password: '3123d9f'
        }),
        knex('users')
        .insert({
          firstname: 'Franklin',
          lastname: 'Roosevelt',
          email: 'fdr@europe.com',
          password: 'whatever'
        }),
        knex('users')
        .insert({
          firstname: 'Jane',
          lastname: 'White',
          email: 'jwhite@placeholder.net',
          password: 'isThisRE3llyNE33d3D'
        }),
        knex('users')
        .insert({
          firstname: 'Abraham',
          lastname: 'Lincoln',
          email: 'abe@logcabin.gov',
          password: 'abracadabra'
        })
      ]);
    });
};
