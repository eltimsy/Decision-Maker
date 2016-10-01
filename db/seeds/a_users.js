exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          username: 'Alice123',
          email: 'alice@goodmail.com',
          password: 'password'
        }),
        knex('users')
        .insert({
          username: 'Jimmy',
          email: 'jim@goodmail.com',
          password: '3123d9f'
        }),
        knex('users')
        .insert({
          username: 'Frankie',
          email: 'fdr@europe.com',
          password: 'whatever'
        }),
        knex('users')
        .insert({
          username: 'Janegold',
          email: 'jwhite@placeholder.net',
          password: 'isThisRE3llyNE33d3D'
        }),
        knex('users')
        .insert({
          username: 'LincolnGod',
          email: 'abe@logcabin.gov',
          password: 'abracadabra'
        })
      ]);
    });
};
