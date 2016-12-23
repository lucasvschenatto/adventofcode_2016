var md5 = require('md5');
var result = [];
function isEmpty(index){
  var r = result[index] === undefined;
  if (r === true)
    console.log("index "+index+" with this content "+result[index]+" will be assigned.")
  return r;
}
function isPosition(position){
  switch (position) {
    case '0':
      return true;
    case '1':
      return true;
    case '2':
      return true;
    case '3':
      return true;
    case '4':
      return true;
    case '5':
      return true;
    case '6':
      return true;
    case '7':
      return true;
    default:
      return false;
  }
}
function isPositionEmpty(position){
  return isPosition(position) && isEmpty(position);
}
function findPassword(doorId){
  var count = 0;
  var hash;
  for (var i = 1; i <= 8; i++) {
    do {
      var key = doorId.concat(count++);
      hash = md5(key);
      var prefix = hash.substr(0,5);
      var position = hash.charAt(5);
      var char =hash.charAt(6);
    } while ( !( prefix === "00000" && isPositionEmpty(position) ) );
    result[position] = char;
    console.log(hash);
    console.log(result);
  }
  return result;
};
module.exports = findPassword;
