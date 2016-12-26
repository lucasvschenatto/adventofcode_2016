function countEachChar(arrayChar){
  var oChars = [];
  arrayChar.forEach((letter)=>{
    if(oChars.findIndex((o)=>o.char === letter) === -1)
      oChars.push({"char":letter,count:0});
    else
      oChars.find((o)=>o.char === letter).count++;
  });
  return oChars;
}
module.exports = countEachChar;
