exports.seed = function (knex, Promise) {
  return knex('votes_by_vote')
    .del()
    .then(function () {
      return Promise.all([
        knex('votes_by_vote')
        .insert({
          vote_id: 1,
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 2,
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 3,
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 4,
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 5,
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 6,
          vote_value: 0,
          question_id: 3,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 7,
          vote_value: 1,
          question_id: 3,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 8,
          vote_value: 2,
          question_id: 3,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 9,
          vote_value: 3,
          question_id: 3,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 10,
          vote_value: 4,
          question_id: 3,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 11,
          vote_value: 0,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 12,
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 13,
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 14,
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 15,
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 16,
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 17,
          vote_value: 1,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 18,
          vote_value: 2,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 19,
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 20,
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 21,
          vote_value: 0,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 22,
          vote_value: 1,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 23,
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 24,
          vote_value: 3,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 25,
          vote_value: 4,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 26,
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 27,
          vote_value: 1,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 28,
          vote_value: 2,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 29,
          vote_value: 3,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 30,
          vote_value: 4,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 31,
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }), knex('votes_by_vote')
        .insert({
          vote_id: 32,
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }), knex('votes_by_vote')
        .insert({
          vote_id: 33,
          vote_value: 2,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 34,
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 35,
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }), knex('votes_by_vote')
        .insert({
          vote_id: 36,
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 37,
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 38,
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 39,
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 40,
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 41,
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 42,
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 43,
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 44,
          vote_value: 3,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 45,
          vote_value: 4,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 46,
          vote_value: 0,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 47,
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 48,
          vote_value: 2,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 49,
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 50,
          vote_value: 4,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 51,
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 52,
          vote_value: 1,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 53,
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 54,
          vote_value: 0,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 55,
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 56,
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 57,
          vote_value: 3,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 58,
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 59,
          vote_value: 0,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 60,
          vote_value: 1,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 61,
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 62,
          vote_value: 0,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 63,
          vote_value: 1,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 64,
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 65,
          vote_value: 3,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 66,
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 67,
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 68,
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 69,
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 70,
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 71,
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 72,
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 73,
          vote_value: 0,
          question_id: 1,
          choice_id: 3
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 74,
          vote_value: 1,
          question_id: 1,
          choice_id: 2
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 75,
          vote_value: 2,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 76,
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 77,
          vote_value: 4,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 78,
          vote_value: 0,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 79,
          vote_value: 1,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 80,
          vote_value: 2,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 81,
          vote_value: 0,
          question_id: 2,
          choice_id: 7
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 82,
          vote_value: 1,
          question_id: 2,
          choice_id: 6
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 83,
          vote_value: 2,
          question_id: 2,
          choice_id: 8
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 84,
          vote_value: 0,
          question_id: 3,
          choice_id: 11
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 85,
          vote_value: 1,
          question_id: 3,
          choice_id: 9
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 86,
          vote_value: 2,
          question_id: 3,
          choice_id: 10
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 87,
          vote_value: 0,
          question_id: 1,
          choice_id: 1
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 88,
          vote_value: 1,
          question_id: 1,
          choice_id: 4
        }),
        knex('votes_by_vote')
        .insert({
          vote_id: 89,
          vote_value: 2,
          question_id: 1,
          choice_id: 2
        }), knex('votes_by_vote')
        .insert({
          vote_id: 90,
          vote_value: 3,
          question_id: 1,
          choice_id: 5
        }), knex('votes_by_vote')
        .insert({
          vote_id: 91,
          vote_value: 4,
          question_id: 1,
          choice_id: 3
        })
      ]);
    });
};
