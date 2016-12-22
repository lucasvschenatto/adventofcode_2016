function sumValidSectorIds(result,room){
  return room.isValid()? result + room.getSectorId() : result;
  // if (room.isValid()){
  //   return result + room.getSectorId();
  // }
  // else {
  //   return result;
  // }
}
var makeRoom = require("./makeRoom");
function makeRoomCounter(inputRooms){
  var rooms = [];
  inputRooms.forEach((room)=>{
    rooms.push(makeRoom(room));
  });
  function count(){
    return rooms.reduce(sumValidSectorIds,0);
  };
  return{
    count:count
  }
};
module.exports = makeRoomCounter;
