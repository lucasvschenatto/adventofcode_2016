var md5 = require('md5');
function findPassword(doorId){
  var count = 0;
  var hash;
  result = [];
  for (var i = 1; i <= 8; i++) {
    do {
      var key = doorId.concat(count++);
      hash = md5(key);
    } while (hash.substr(0,5) !== "00000");
    console.log(hash);
    result.push(hash.charAt(5));
    console.log(result);
  }
  return result;
};
module.exports = findPassword;
