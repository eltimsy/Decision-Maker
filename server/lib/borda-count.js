'use strict';

const pollData = require('../db/polls.json');

//testing code: process.argv[2] is the related question number

function selectQuestion(questionNumber, dataSet) {
  let out = [];
  dataSet.forEach((value, index) => {
    if (value.question_id === questionNumber) {
      out.push(value.choices);
    }
  });
  return out; // returns an array of arrays (ordered from least to most preferred)
}

// Currently written to take in the uid of the poll question,
// as well as the whole set of data from the votes table. We may
// want to run the select operation earlier and just pass in the
// arrays, but this is probably best for now.

function bordaCount(questionNumber, dataSet) {
  const preferenceSet = selectQuestion(Number(questionNumber), dataSet);
  let results = {};
  preferenceSet.forEach((pollResult, pollIndex) => {
    console.log(pollResult)
    pollResult.forEach((pref, prefIndex) => {
      if (!results[pref]) {
        results[pref] = 0
      };
      results[pref] += prefIndex;
    })
  })
  return results;
}

// Returns the borda count for each choice_id; the highest count
// indicates the winner, though the rest of the data might still
// be useful.

console.log(bordaCount(process.argv[2], pollData));
