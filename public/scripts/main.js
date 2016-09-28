'use strict';

const ENV         = process.env.ENV || "development";
const knexConfig  = require("./../../knexfile");
const knex        = require("knex")(knexConfig[ENV]);

var query = knex.select('question').from('questions').then(function(result) {
  console.log(result);
});

knex.destroy();
