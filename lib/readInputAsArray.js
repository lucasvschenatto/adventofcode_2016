var readInput = require('./readInput');
function asArray(string){
  var result = string.split("\n");
  result.pop();
  return result;
}
function readInputAsArray(number){
  return readInput(number,asArray);
}
module.exports = readInputAsArray;
