let readInput = require("../readInputAsArray");
let execute = require("./execute.js");
let Screen = require("./Screen.js");
let input = readInput(8);
let s = new Screen();
execute(s,input);
console.log(s.countOn());
