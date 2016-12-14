var threeTriangles = [
  [3 ,4 ,5 ],
  [9 ,11,12],
  [6 ,8 ,10]
];
var nineTriangles = [
  [1 ,2 ,3 ],
  [4 ,5 ,6 ],
  [7 ,8 ,9 ],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21],
  [22,23,24],
  [25,26,27]
];
var exampleInput = [
  [101, 301, 501],
  [102, 302, 502],
  [103, 303, 503],
  [201, 401, 601],
  [202, 402, 602],
  [203, 403, 603]
];
describe("columnConverter", ()=>{
  var convert = require('../../lib/day3/columnConverter');
  it("should return a triangle from the first element of the three first arguments",()=>{
    var converted = convert(...threeTriangles);
    expect(converted[0]).toEqual([3,9,6]);
  });
  it("should also return a triangle from the second element of the three first arguments",()=>{
    var converted = convert(...threeTriangles);
    expect(converted[1]).toEqual([4,11,8]);
  });
  it("should also return a triangle from the third element of the three first arguments",()=>{
    var converted = convert(...threeTriangles);
    expect(converted[2]).toEqual([5,12,10]);
  });
  it("should convert the remaining lines with same rule",()=>{
    var converted = convert(...nineTriangles);
    expect(converted[0]).toEqual([1 ,4 ,7 ]);
    expect(converted[1]).toEqual([2 ,5 ,8 ]);
    expect(converted[2]).toEqual([3 ,6 ,9 ]);
    expect(converted[3]).toEqual([10,13,16]);
    expect(converted[4]).toEqual([11,14,17]);
    expect(converted[5]).toEqual([12,15,18]);
    expect(converted[6]).toEqual([19,22,25]);
    expect(converted[7]).toEqual([20,23,26]);
    expect(converted[8]).toEqual([21,24,27]);
  });
  it("should match given example",()=>{
    var converted = convert(...exampleInput);
    expect(converted[0]).toEqual([101, 102, 103]);
    expect(converted[1]).toEqual([301, 302, 303]);
    expect(converted[2]).toEqual([501, 502, 503]);
    expect(converted[3]).toEqual([201, 202, 203]);
    expect(converted[4]).toEqual([401, 402, 403]);
    expect(converted[5]).toEqual([601, 602, 603]);
  });
});
describe("columnCounter",()=>{
  var count =  require('../../lib/day3/columnCounter');
  it("should count triangles from columns",()=>{
    var result = count(...threeTriangles);
    expect(result).toEqual(2);
  });
});
