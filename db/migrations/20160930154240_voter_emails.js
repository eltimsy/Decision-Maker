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
    knex.schema.dropTableIfExists('voter_emails')
  ]);
};
