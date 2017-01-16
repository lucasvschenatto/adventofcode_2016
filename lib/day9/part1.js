let readInput = require("../readInput");
let input = readInput(9);
let decompress = require("./decompress");

let decompressed = decompress(input);

console.log(decompressed.size());
