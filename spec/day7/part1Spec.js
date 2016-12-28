describe("isABBA", ()=>{
  var isAbba = require("../../lib/day7/isAbba");
  it("should find ABBA if the IP starts with mirrored 'ab'", ()=>{
    var result = isAbba('abba[xywz]xywz');
    expect(result).toBeTruthy();
  });
  it("should not find ABBA if the IP has two mirrored chars", ()=>{
    var result = isAbba('abcd[efgh]ijkl');
    expect(result).toBeFalsy();
  });
  it("should find ABBA in other mirrored two chars too",()=>{
    var result = isAbba('xyyx[efgh]ijkl');
    expect(result).toBeTruthy();
  });
  it("should not find ABBA if the interior characters are not different",()=>{
    var result = isAbba('xxxx[efgh]ijkl');
    expect(result).toBeFalsy();
  });
  it("should not find ABBA within hipernet sequence",()=>{
    var result = isAbba('abcd[abba]ijkl');
    expect(result).toBeFalsy();
  });
  it("should find ABBA after hipernet sequence",()=>{
    var result = isAbba('xywz[xywz]abba');
    expect(result).toBeTruthy();
  });
  it("should find ABBA between hipernet sequences",()=>{
    var result = isAbba('xywz[xywz]abba[ghij]');
    expect(result).toBeTruthy();
  });
  it("should not find ABBA split by hipernet sequence",()=>{
    var result = isAbba('xywzab[xywz]bawerty[ghij]');
    expect(result).toBeFalsy();
  });
  it("should not find ABBA if hipernet sequence also has ABBA",()=>{
    var result = isAbba('xywz[xywz]abba[abba]');
    expect(result).toBeFalsy();
  });
});
