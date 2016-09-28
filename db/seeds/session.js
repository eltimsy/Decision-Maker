exports.seed = function (knex, Promise) {
  return knex('session')
    .del()
    .then(function () {
      return Promise.all([
        knex('session')
        .insert({
          session_id: 1,
          session_user: 2,
          expire: 20 - OCT - 17 12.29 .53 .000000000 AM
        }),
        knex('session')
        .insert({
          session_id: 2,
          session_user: 4,
          expire: 04 - OCT - 17 11.09 .53 .000000000 PM
        }),
        knex('session')
        .insert({
          session_id: 3,
          session_user: 5,
          expire: 05 - NOV - 17 12.55 .53 .000000000 PM
        }),
        knex('session')
        .insert({
          session_id: 4,
          session_user: 1,
          expire: 11 - OCT - 17 12.55 .53 .000000000 PM
        })
      ]);
    });
};
