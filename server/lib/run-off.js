'use strict';

// Just some preliminary work for the run-off.

// Uses process.argv[2] to substitute the input of a question number.

const pollData = require('../db/polls.json');

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

}



function ()
get first preference votes, eachArray[-1];
check
for majority,
if majority: done;
else :
