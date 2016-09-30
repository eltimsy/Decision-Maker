'use strict';

module.exports = function getPollResults(db, questions) {
  return new Promise((resolve, reject) => {
    qidArray = questions.map((value) => {
      return value.question_id;
    })
    db.from('questions')
      .whereIn('question_id', qidArray)
      .innerJoin('choices', 'questions.question_id', 'choices.question_id')
      .then((data) => {
        resolve(cleanPollJoin(data));
      })
      .catch((error) => {
        reject(error);
      })
    })
}

function cleanPollJoin(data) {
  let out = {
    question_id: data[0].question_id,
    question: data[0].question,
    choices: []
  }
  data.forEach((row) => {
    out.choices.push({
      choice_id: row.choice_id,
      choice_name: row.choice_name,
      description: row.description
    });
  })
  return out;
}
