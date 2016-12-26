var countEachChar = require("../countEachChar");
function concatenateFive(word,oChar,count){
  return count < 5 ? word + oChar.char : word;
};
function byCountAndAlphabetization(a,b){
  var countDiff = b.count - a.count;
  if(countDiff !== 0)
    return countDiff;
  else {
    return b.char < a.char;
  }
};
function makeChecksum(room){
  var oChars = countEachChar(room.split(""));
  oChars.sort(byCountAndAlphabetization);
  var result = oChars.reduce(concatenateFive,"");

  function getValue(){
    return result;
  }
  return{
    getValue:getValue
  };
};
module.exports = makeChecksum;
