describe("checksum", function() {
  var makeChecksum = require('../../lib/day4/makeChecksum');
  it("should have only five letters",()=>{
    var checksum = makeChecksum("abcdef");
    expect(checksum.getValue()).toEqual("abcde");
  });
  it("should not repeat a letter",()=>{
    var checksum = makeChecksum("aabcde");
    expect(checksum.getValue()).toEqual("abcde");
  });
  it("should have the five most used letters",()=>{
    var checksum = makeChecksum("abcdeffgghhiijj");
    expect(checksum.getValue()).toEqual("fghij");
  });
  it("should be ordered by count",()=>{
    var checksum = makeChecksum("abbcccddddeeeee");
    expect(checksum.getValue()).toEqual("edcba");
  });
  it("should order ties by alphabetic order",()=>{
    var checksum = makeChecksum("edcba");
    expect(checksum.getValue()).toEqual("abcde");
  });
});

describe("room", function() {
  var makeRoom = require('../../lib/day4/makeRoom');
  it("should be valid if has exactly five letters and corresponding checksum", ()=> {
    var room = makeRoom("a-b-c-d-e-123[abcde]");
    expect(room.isValid()).toBeTruthy();
  });
  it("should not be valid if checksum differs from letters", ()=> {
    var room = makeRoom("a-b-c-d-e-123[vxwyz]");
    expect(room.isValid()).toBeFalsy();
  });
  it("should not be valid if checksum doesnt have the five most common letters",()=>{
    var room = makeRoom("a-b-c-d-e-efff-gehj-ji-123[abcde]");
    expect(room.isValid()).toBeFalsy();
  });
  it("should be valid if checksum has the five most common letters",()=>{
    var room = makeRoom("a-b-c-d-efff-gehj-ji-123[fejab]");
    expect(room.isValid()).toBeTruthy();
  });
  it("should return correct sectorId",()=>{
    var room = makeRoom("abcde-456[abcde]");
    expect(room.getSectorId()).toEqual(456);
  });
});

describe("roomCounter", function(){
  var makeRoomCounter = require("../../lib/day4/makeRoomCounter");
  it("should return sectorId for one valid room as input",()=>{
    var count = makeRoomCounter(["aaaaa-bbb-z-y-x-123[abxyz]"]).count();
    expect(count).toEqual(123);
  });
  it("should return zero for one invalid room as input",()=>{
    var count = makeRoomCounter(["aaaaa-bbb-z-y-x-123[abxkz]"]).count();
    expect(count).toEqual(0);
  });
  it("should return the sum of the two sectorIds for two valid rooms as input",()=>{
    var count = makeRoomCounter(["aaaaa-bbb-z-y-x-123[abxyz]","a-b-c-d-e-f-g-h-50[abcde]"]).count();
    expect(count).toEqual(173);
  });
  it("should return only the sum of the sectorIds for valid rooms in input",()=>{
    var count = makeRoomCounter(["aaaaa-bbb-z-y-x-123[abxyz]","a-b-c-d-e-f-g-h-987[abcde]",
      "not-a-real-room-404[oarel]","totally-real-room-200[decoy]"]).count();
    expect(count).toEqual(1514);
  });
});
