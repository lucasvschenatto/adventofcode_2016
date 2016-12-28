function isAbba(ip){
  var aIp = ip.substring(0,ip.indexOf("[")).split("");
  for (var i = 0; i < aIp.length-3; i++) {
    var firstTwo = aIp[i]+aIp[i+1];
    var secondTwo = aIp[i+3]+aIp[i+2];
    if(firstTwo === secondTwo)
      return true;
  }
  return false;
}
module.exports = isAbba;
