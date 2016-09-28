exports.seed = function (knex, Promise) {
  return knex('questions')
    .del()
    .then(function () {
      return Promise.all([
        knex('questions')
        .insert({
          question_id: 1,
          question: 'Where should we eat tomorrow?',
          admin_url: 'adsfdkfvxcn83arapdf',
          poll_url: 'cvvi9eeferiemd,vnzpfd90i',
          user_id: 2
        }),
        knex('questions')
        .insert({
          question_id: 2,
          question: 'Who\'s the best coder?',
          admin_url: 'fadsfadsfkxclvjdfasf',
          poll_url: 'adsfadf29rjdasjfsdf',
          user_id: 3
        }),
        knex('questions')
        .insert({
          question_id: 3,
          question: 'Who should be president?',
          admin_url: 'vxcifudspiuerijwe8rdcddf',
          poll_url: 'adfsjkcnzvcnwero34',
          user_id: 5
        })
      ]);
    });
};
