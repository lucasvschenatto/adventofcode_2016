var fs = require('fs');
var inputsDir = __dirname.replace("lib","inputs/");
function readInput(number, fnc){
  var fileInString = fs.readFileSync(inputsDir+number+".txt","utf8");
  return fnc !== undefined? fnc(fileInString): fileInString;
}
module.exports = readInput;
