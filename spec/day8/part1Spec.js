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
  describe("rotateRow",()=>{
    it("should move the first pixel to the second position when rotating one",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateRow(0,1);
      expect(s.getPix(0,1).value).toBeTruthy();
    });
    it("should move the last pixel to the first position when rotating one",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateRow(0,1);
      expect(s.getPix(0,0).value).toBeFalsy();
    });
    it("should also move pixels in the middle",()=>{
      let s = new Screen();
      s.rect(25,1);
      s.rotateRow(0,1);
      expect(s.getPix(0,0 ).value).toBeFalsy();
      expect(s.getPix(0,1 ).value).toBeTruthy();
      expect(s.getPix(0,2 ).value).toBeTruthy();
      expect(s.getPix(0,3 ).value).toBeTruthy();
      expect(s.getPix(0,6 ).value).toBeTruthy();
      expect(s.getPix(0,7 ).value).toBeTruthy();
      expect(s.getPix(0,22).value).toBeTruthy();
      expect(s.getPix(0,23).value).toBeTruthy();
      expect(s.getPix(0,24).value).toBeTruthy();
      expect(s.getPix(0,25).value).toBeTruthy();
      expect(s.getPix(0,26).value).toBeFalsy();
      expect(s.getPix(0,27).value).toBeFalsy();
      expect(s.getPix(0,28).value).toBeFalsy();
      expect(s.getPix(0,29).value).toBeFalsy();
      expect(s.getPix(0,30).value).toBeFalsy();
      expect(s.getPix(0,31).value).toBeFalsy();
      expect(s.getPix(0,45).value).toBeFalsy();
      expect(s.getPix(0,46).value).toBeFalsy();
      expect(s.getPix(0,47).value).toBeFalsy();
      expect(s.getPix(0,48).value).toBeFalsy();
      expect(s.getPix(0,49).value).toBeFalsy();
    });
    it("should move pixels the given times",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateRow(0,2);
      expect(s.getPix(0,0).value).toBeFalsy();
      expect(s.getPix(0,1).value).toBeFalsy();
      expect(s.getPix(0,2).value).toBeTruthy();
      expect(s.getPix(0,3).value).toBeFalsy();

      let t = new Screen();
      t.rect(3,1);
      t.rotateRow(0,6);
      expect(t.getPix(0,0).value).toBeFalsy();
      expect(t.getPix(0,1).value).toBeFalsy();
      expect(t.getPix(0,2).value).toBeFalsy();
      expect(t.getPix(0,3).value).toBeFalsy();
      expect(t.getPix(0,4).value).toBeFalsy();
      expect(t.getPix(0,5).value).toBeFalsy();
      expect(t.getPix(0,6).value).toBeTruthy();
      expect(t.getPix(0,7).value).toBeTruthy();
      expect(t.getPix(0,8).value).toBeTruthy();
      expect(t.getPix(0,9).value).toBeFalsy();
    });
  });
  describe("rotateColumn",()=>{
    it("should move the first pixel to the second position when rotating one",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateColumn(0,1);
      expect(s.getPix(1,0).value).toBeTruthy();
    });
    it("should move the last pixel to the first position when rotating one",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateColumn(0,1);
      expect(s.getPix(0,0).value).toBeFalsy();
    });
    it("should also move pixels in the middle",()=>{
      let s = new Screen();
      s.rect(1,3);
      s.rotateColumn(0,1);
      expect(s.getPix(0,0).value).toBeFalsy();
      expect(s.getPix(1,0).value).toBeTruthy();
      expect(s.getPix(2,0).value).toBeTruthy();
      expect(s.getPix(3,0).value).toBeTruthy();
      expect(s.getPix(4,0).value).toBeFalsy();
      expect(s.getPix(5,0).value).toBeFalsy();
    });
    it("should move pixels the given times",()=>{
      let s = new Screen();
      s.rect(1,1);
      s.rotateColumn(0,2);
      expect(s.getPix(0,0).value).toBeFalsy();
      expect(s.getPix(1,0).value).toBeFalsy();
      expect(s.getPix(2,0).value).toBeTruthy();
      expect(s.getPix(3,0).value).toBeFalsy();

      let t = new Screen();
      t.rect(1,3);
      t.rotateColumn(0,5);
      expect(t.getPix(0,0).value).toBeTruthy();
      expect(t.getPix(1,0).value).toBeTruthy();
      expect(t.getPix(2,0).value).toBeFalsy();
      expect(t.getPix(3,0).value).toBeFalsy();
      expect(t.getPix(4,0).value).toBeFalsy();
      expect(t.getPix(5,0).value).toBeTruthy();
    });
  });
});
