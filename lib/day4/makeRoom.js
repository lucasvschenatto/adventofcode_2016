function makeRoom (description){
  var parts = description.replace("]","").split("[");
  var checksum = parts.pop();
  parts = parts[0].split("-");
  var sectorId = parts.pop();
  var room = "";
  parts.forEach((part)=>{
    room = room + part;
  });
  function isValid(){
    return room === checksum;
  };
  return {
    isValid:isValid
  };
};
module.exports = makeRoom;
