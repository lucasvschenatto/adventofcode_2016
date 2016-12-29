describe("Pixel",()=>{
  var Pixel = require("../../lib/day8/Pixel");
  it("should have wide set",()=>{
    var p = new Pixel(1,2,true);
    expect(p.wide).toEqual(1);
  });
  it("should have tall set",()=>{
    var p = new Pixel(1,2,true);
    expect(p.tall).toEqual(2);
  });
  it("should have value set",()=>{
    var p = new Pixel(1,2,true);
    expect(p.value).toEqual(true);
  });
});
describe("Screen",()=>{
  var Screen = require("../../lib/day8/Screen");
  it("should start filled with 50x6 pixels",()=>{
    var s = new Screen();
    expect(s._pixels.length).toEqual(50*6);
  });
  it("should start with all pixels off",()=>{
    var s = new Screen();
    expect(s._pixels.some((pixel)=>pixel.value === true)).toBeFalsy();
  });
  describe("rect",()=>{
    it("should turn on A times B pixels",()=>{
      var s = new Screen();
      s.rect(1,1);
      expect(s.countOn()).toEqual(1);
      s.rect(3,2);
      expect(s.countOn()).toEqual(6);
    });
  });
});
