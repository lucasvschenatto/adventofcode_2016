describe("triangle", function() {
  var makeTriangle = require('../../lib/day3/triangle');
  it("should have three sides", ()=> {
    var triangle = makeTriangle(10,10,15);
    expect(triangle.sides).toEqual([10,10,15]);
  });
  it("should know when it is not a triangle", ()=>{
    var triangle = makeTriangle(5,10,25);
    expect(triangle.isTriangle()).toBeFalsy();
  });
  it("should know when it is a triangle", ()=>{
    var triangle = makeTriangle(10,10,10);
    expect(triangle.isTriangle()).toBeTruthy();
  });
});
describe("counter", function() {
  var counter = require('../../lib/day3/counter');

  it("should count all triangles",()=>{
    var count = counter([3,4,5],[9,9,9],[6,8,10]);
    expect(count).toEqual(3);
  });
  it("should count only triangles",()=>{
    var count = counter([3,4,5],[9,9,9],[10,10,25]);
    expect(count).toEqual(2);
  });
  //
  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});