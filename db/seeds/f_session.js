exports.seed = function (knex, Promise) {
  return knex('session')
    .del()
    .then(function () {
      return Promise.all([
        knex('session')
        .insert({
          session_id: 1,
          user_id: 2,
          expire: '2004-10-19 10:23:54+02'
        }),
        knex('session')
        .insert({
          session_id: 2,
          user_id: 4,
          expire: '2004-10-19 10:23:54+02'
        }),
        knex('session')
        .insert({
          session_id: 3,
          user_id: 5,
          expire: '2004-10-19 10:23:54+02'
        }),
        knex('session')
        .insert({
          session_id: 4,
          user_id: 1,
          expire: '2004-10-19 10:23:54+02'
        })
      ]);
    });
};
