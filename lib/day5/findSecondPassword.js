var md5 = require('md5');
function isPosition(char){
  switch (char) {
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
function findPassword(doorId){
  var count = 0;
  var hash;
  result = [];
  for (var i = 1; i <= 8; i++) {
    do {
      var key = doorId.concat(count++);
      hash = md5(key);
      var prefix = hash.substr(0,5);
      var position = hash.charAt(5);
      var char =hash.charAt(6);
    } while ( !( prefix === "00000" && isPosition(position) ) );
    result[position] = char;
    console.log(hash);
    console.log(position);
    console.log(result);
  }
  return result;
};
module.exports = findPassword;
