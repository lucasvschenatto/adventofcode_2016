var makeChecksum = require("./makeChecksum");
function makeRoom (description){
  var parts = description.replace("]","").split("[");
  var givenChecksum = parts.pop();
  parts = parts[0].split("-");
  var sectorId = parseInt(parts.pop());
  var room = "";
  parts.forEach((part)=>{
    room = room + part;
  });
  var verifiedChecksum = makeChecksum(room).getValue();
  function getSectorId(){
    return sectorId;
  }
  function isValid(){
    return verifiedChecksum === givenChecksum;
  };
  return {
    _room:room,
    _givenChecksum:givenChecksum,
    _verifiedChecksum:verifiedChecksum,
    getSectorId:getSectorId,
    isValid:isValid
  };
};
module.exports = makeRoom;
