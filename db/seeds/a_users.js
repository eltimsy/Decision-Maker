exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          firstname: 'Alice',
          lastname: 'Smith',
          username: 'Alice123',
          email: 'alice@goodmail.com',
          password: 'password'
        }),
        knex('users')
        .insert({
          firstname: 'Jim',
          lastname: 'Thomson',
          username: 'Jimmy',
          email: 'jim@goodmail.com',
          password: '3123d9f'
        }),
        knex('users')
        .insert({
          firstname: 'Franklin',
          lastname: 'Roosevelt',
          username: 'Frankie',
          email: 'fdr@europe.com',
          password: 'whatever'
        }),
        knex('users')
        .insert({
          firstname: 'Jane',
          lastname: 'White',
          username: 'Janegold',
          email: 'jwhite@placeholder.net',
          password: 'isThisRE3llyNE33d3D'
        }),
        knex('users')
        .insert({
          firstname: 'Abraham',
          lastname: 'Lincoln',
          username: 'LincolnGod',
          email: 'abe@logcabin.gov',
          password: 'abracadabra'
        })
      ]);
    });
};
