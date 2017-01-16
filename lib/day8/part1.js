let readInput = require("../readInputAsArray");
let input = readInput(8);
let execute = require("./execute.js");
let Screen = require("./Screen.js");
let s = new Screen();
execute(s,input);
console.log(s.countOn());
