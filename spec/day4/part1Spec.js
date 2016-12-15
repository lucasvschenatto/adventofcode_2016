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
//   it("should know when it is not a triangle", ()=>{
//     var triangle = makeTriangle(5,10,25);
//     expect(triangle.isTriangle()).toBeFalsy();
//   });
//   it("should know when it is a triangle", ()=>{
//     var triangle = makeTriangle(10,10,10);
//     expect(triangle.isTriangle()).toBeTruthy();
//   });
// });
// describe("counter", function() {
//   var counter = require('../../lib/day3/counter');
//
//   it("should count all triangles",()=>{
//     var count = counter([3,4,5],[9,9,9],[6,8,10]);
//     expect(count).toEqual(3);
//   });
//   it("should count only triangles",()=>{
//     var count = counter([3,4,5],[9,9,9],[10,10,25]);
//     expect(count).toEqual(2);
//   });
});
