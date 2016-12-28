function hasAbba(aIp){
  for (var i = 0; i < aIp.length-3; i++) {
    var firstTwo = aIp[i]+aIp[i+1];
    var secondTwo = aIp[i+3]+aIp[i+2];
    if(firstTwo === secondTwo && aIp[i] !== aIp[i+1])
      return true;
  }
  return false;
}
function isAbba(ip){
  var hipernetRegex = /\[[^\]]*\]/g;
  var hipernets = ip.match(hipernetRegex);
  for (var i = 0; i < hipernets.length; i++) {
    if(hasAbba(hipernets[i]))
      return false;
  }
  var aIp = ip.split(hipernetRegex);
  return  aIp.some(hasAbba);
}
module.exports = isAbba;
