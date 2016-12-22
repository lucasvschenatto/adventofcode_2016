function concatenateFive(word,oLetter,count){
  return count < 5 ? word + oLetter.letter : word;
};
function byCountAndAlphabetization(a,b){
  var countDiff = b.count - a.count;
  if(countDiff !== 0)
    return countDiff;
  else {
    return b.letter < a.letter;
  }
};

function makeChecksum(room){
  var oLetters = [];
  room.split("").forEach((letter)=>{
    if(oLetters.findIndex((o)=>o.letter === letter) === -1)
      oLetters.push({"letter":letter,count:0});
    else
      oLetters.find((o)=>o.letter === letter).count++;
  });
  oLetters.sort(byCountAndAlphabetization);
  var result = oLetters.reduce(concatenateFive,"");

  function getValue(){
    return result;
  }
  return{
    getValue:getValue
  };
};
module.exports = makeChecksum;
