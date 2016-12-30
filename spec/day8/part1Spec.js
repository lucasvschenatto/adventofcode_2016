describe("Pixel",()=>{
  let Pixel = require("../../lib/day8/Pixel");
  it("should have row set",()=>{
    let p = new Pixel(1,2,true);
    expect(p.row).toEqual(1);
  });
  it("should have column set",()=>{
    let p = new Pixel(1,2,true);
    expect(p.column).toEqual(2);
  });
  it("should have value set",()=>{
    let p = new Pixel(1,2,true);
    expect(p.value).toEqual(true);
  });
});
describe("Screen",()=>{
  let Screen = require("../../lib/day8/Screen");
  it("should start filled with 50x6 pixels",()=>{
    let s = new Screen();
    expect(s._pixels.length).toEqual(50*6);
  });
  it("should start with all pixels off",()=>{
    let s = new Screen();
    expect(s._pixels.some((pixel)=>pixel.value === true)).toBeFalsy();
  });
  describe("rect",()=>{
    it("should turn on A times B pixels",()=>{
      let s = new Screen();
      s.rect(1,1);
      expect(s.countOn()).toEqual(1);
      s.rect(3,2);
      expect(s.countOn()).toEqual(6);
      s.rect(10,3);
      expect(s.countOn()).toEqual(30);
      s.rect(50,6);
      expect(s.countOn()).toEqual(300);
    });
  });
  describe("getPix",()=>{
    let s = new Screen();
    it("should return the correct pixel, with the correct config",()=>{
      s.rect(1,1);
      let firstPix = s.getPix(0,0);
      expect(firstPix.column).toEqual(0);
      expect(firstPix.row).toEqual(0);
      expect(firstPix.value).toBeTruthy();

      let secondPix = s.getPix(1,0);
      expect(secondPix.column).toEqual(0);
      expect(secondPix.row).toEqual(1);
      expect(secondPix.value).toBeFalsy();

      s.rect(49,6);

      let randomPix = s.getPix(4,36);
      expect(randomPix.column).toEqual(36);
      expect(randomPix.row).toEqual(4);
      expect(randomPix.value).toBeTruthy();

      let lastPix = s.getPix(5,49);
      expect(lastPix.column).toEqual(49);
      expect(lastPix.row).toEqual(5);
      expect(lastPix.value).toBeFalsy();
    });
  });
  describe("rotateR",()=>{
    it("should move the first pixel to the second position when rotating one",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateRow(0,1);
      expect(s.getPix(0,0).value).toBeFalsy();
      expect(s.getPix(1,2).value).toBeTruthy();
    });
  });
});
