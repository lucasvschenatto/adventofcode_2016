var convert = require('./columnConverter');
var count   = require('./counter');
function columnCounter(){
  var input = Array.prototype.slice.call(arguments);
  var converted = convert(...input);
  return count(...converted);
};
module.exports = columnCounter;
