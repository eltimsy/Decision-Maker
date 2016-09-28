exports.seed = function (knex, Promise) {
  return knex('votes_by_vote')
    .del()
    .then(function () {
      return Promise.all([
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 3,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 3,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 3,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 3,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 3,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 3,
          choice_id: 11
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 3,
          choice_id: 9
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 3,
          choice_id: 10
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        })
      ]);
    });
};
