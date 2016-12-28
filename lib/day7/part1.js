var readInput = require("../readInputAsArray");
var isAbba = require("./isAbba");
var input = readInput(7);
function sumAbba(total,current){
  return isAbba(current)? total+1 : total;
}
var result = input.reduce(sumAbba,0);
console.log(result);
