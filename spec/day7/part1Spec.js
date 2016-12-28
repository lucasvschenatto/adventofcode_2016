describe("ABBAFinder", ()=>{
  var isAbba = require("../../lib/day7/isAbba");
  it("should find ABBA if the IP starts with mirrored 'ab'", ()=>{
    var result = isAbba('abba[xxxx]yyyy');
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
  it("should not find ABBA in mirrored two chars within square brackets",()=>{
    var result = isAbba('abcd[abba]ijkl');
    expect(result).toBeFalsy();
  });
});
