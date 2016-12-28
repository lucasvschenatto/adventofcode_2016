var readInput = require("../readInputAsArray");
var supportsSSL = require("./supportsSSL");
var input = readInput(7);
function sumSSL(total,current){
  return supportsSSL(current)? total+1 : total;
}
var result = input.reduce(sumSSL,0);
console.log(result);
