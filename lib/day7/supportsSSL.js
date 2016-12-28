function getAbas(supernet){
  var result = [];
  for (var i = 0; i < supernet.length-2; i++) {
    var first = supernet[i];
    var second = supernet[i+1];
    var third = supernet[i+2];
    if(first === third && first !== second){
      result.push(first+second+third);
    }
  }
  return result;
}
function findBab(aba,hipernets){
  var bab = aba[1]+aba[0]+aba[1];
  return hipernets.some((hipernet)=>hipernet.search(bab) !== -1);
}
function supportSSL(ip){
  var hipernetRegex = /\[[^\]]*\]/g;
  var hipernets = ip.match(hipernetRegex);
  var supernets = ip.split(hipernetRegex);
  var abas = [];
  supernets.forEach((supernet)=> abas.push(...getAbas(supernet)));
  return abas.some((aba)=> findBab(aba,hipernets));
}
module.exports = supportSSL;
