function columnCounter(){
  var input = Array.prototype.slice.call(arguments);
  var result = [];
  for (var i = 0; i+2 < input.length; i = i+3) {
    result.push( [input[i][0], input[i+1][0], input[i+2][0]] );
    result.push( [input[i][1], input[i+1][1], input[i+2][1]] );
    result.push( [input[i][2], input[i+1][2], input[i+2][2]] );
  }
  return result;
}
module.exports = columnCounter;
