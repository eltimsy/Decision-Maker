'use strict';
function bordaCount(questionNumber, dataSet) {
  let results = {};
  dataSet.forEach((pollResult, pollIndex) => {
    pollResult.preferences.forEach((pref, prefIndex) => {
      if (!results[pref]) {
        results[pref] = 0
      };
      results[pref] += prefIndex;
    })
  })
  return results;
}

module.exports = {
  bordaCount: bordaCount
}
// Returns the borda count for each choice_id; the highest count
// indicates the winner, though the rest of the data might still
// be useful.
