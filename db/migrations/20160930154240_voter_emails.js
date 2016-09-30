exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('voter_emails', function (table) {
      table.bigincrements('ve_id');
      table.string('voter_email');
      table.boolean('voted');
      table.bigInteger('question_id')
        .references('questions.question_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('voter_emails', function (table) {
      if (table.hasColumn('ve_id')) {
        table.dropPrimary('ve_id');
        table.dropColumn('ve_id');
      }
      if (table.hasColumn('question_id')) {
        table.dropForeign('question_id');
        table.dropColumn('question_id');
      }
    }),
    knex.schema.dropTableIfExists('voter_emails')
  ]);
};
