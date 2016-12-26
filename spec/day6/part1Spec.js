describe("correct",()=>{
  var correct = require('../../lib/day6/correct');
  it("should return the one char in an array containing only one char",()=>{
    var correctedMessage = correct(['a']);
    expect(correctedMessage).toEqual(['a']);
  });
  it("should return the one char in an array of many elements containing the same char",()=>{
    var correctedMessage = correct(['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']);
    expect(correctedMessage).toEqual(['a']);
  });
  it("should return the two chars in an array of many elements containing the same two chars",()=>{
    var correctedMessage = correct(['ab','ab','ab','ab','ab','ab','ab','ab','ab','ab','ab','ab','ab']);
    expect(correctedMessage).toEqual(['a','b']);
  });
  it("should return the most common char in an array of chars",()=>{
    var correctedMessage = correct(['a','b','c','b']);
    expect(correctedMessage).toEqual(['b']);
  });
  it("should return the most common char in each column in an array of strings",()=>{
    var correctedMessage = correct([
      "abcde",
      "xxxxx",
      "abcde"
    ]);
    expect(correctedMessage).toEqual(['a','b','c','d','e']);
  });
  it("should match given example",()=>{
    var correctedMessage = correct([
      "eedadn",
      "drvtee",
      "eandsr",
      "raavrd",
      "atevrs",
      "tsrnev",
      "sdttsa",
      "rasrtv",
      "nssdts",
      "ntnada",
      "svetve",
      "tesnvt",
      "vntsnd",
      "vrdear",
      "dvrsen",
      "enarar"
    ]);
    expect(correctedMessage[0]).toEqual('e');
    expect(correctedMessage[1]).toEqual('a');
    expect(correctedMessage[2]).toEqual('s');
  });
});
