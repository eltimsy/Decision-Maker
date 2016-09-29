'use strict';
// var dataSet = [{ preferences: [ '5', '4', '3', '2', '1' ] },
// { preferences: [ '3', '2', '1', '5', '4' ] },
// { preferences: [ '5', '3', '4', '2', '1' ] },
// { preferences: [ '2', '1', '3', '4', '5' ] },
// { preferences: [ '1', '3', '5', '4', '2' ] },
// { preferences: [ '1', '4', '5', '2', '3' ] },
// { preferences: [ '5', '2', '3', '1', '4' ] },
// { preferences: [ '4', '2', '3', '1', '5' ] },
// { preferences: [ '5', '4', '2', '3', '1' ] },
// { preferences: [ '5', '4', '2', '1', '3' ] },
// { preferences: [ '4', '5', '1', '2', '3' ] },
// { preferences: [ '3', '2', '1', '5', '4' ] },
// { preferences: [ '1', '4', '2', '5', '3' ] } ];
//Uses process.argv[2] to substitute the input of a question number.

//const pollData = require('../db/polls.json');
//
// function selectQuestion(questionNumber, dataSet) {
//   let out = [];
//   dataSet.forEach((value, index) => {
//     if (value.question_id === questionNumber) {
//       out.push(value.choices);
//     }
//   });
//   return out; // returns an array of arrays (ordered from least to most preferred)
// }

// Currently written to take in the uid of the poll question,
// as well as the whole set of data from the votes table. We may
// want to run the select operation earlier and just pass in the
// arrays, but this is probably best for now.

function bordaCount(questionNumber, dataSet) {
  //const preferenceSet = selectQuestion(Number(questionNumber), dataSet);
  let results = {};
  dataSet.forEach((pollResult, pollIndex) => {
    //console.log(pollResult)
    pollResult.preferences.forEach((pref, prefIndex) => {
      if (!results[pref]) {
        results[pref] = 0
      };
      results[pref] += prefIndex;
    })
  })
  return results;
}

//console.log(bordaCount(1, dataSet));
module.exports = {
  bordaCount: bordaCount
}
// Returns the borda count for each choice_id; the highest count
// indicates the winner, though the rest of the data might still
// be useful.
