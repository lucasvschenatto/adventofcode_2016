var countEachChar = require("../countEachChar");
function greaterCount(mostCommon,current){
  return mostCommon.count > current.count? mostCommon:current;
}
function mostCommon(aList){
  var oChars = countEachChar(aList);
  var result = oChars.reduce(greaterCount, 0);
  return result.char;
}
function correct(corruptedData){
  var result = [];
  for (var column = 0; column < corruptedData[0].length; column++) {
    var newRow = [];
    for (var row = 0; row < corruptedData.length; row++) {
      newRow.push(corruptedData[row][column]);
    }
    result.push(mostCommon(newRow));
  }
  return result;
};
module.exports = correct;
