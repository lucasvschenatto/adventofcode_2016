var commands = process.argv.slice(2);
var keyboard = [
  [undefined,undefined,    1    ,undefined,undefined],
  [undefined,    2    ,    3    ,    4    ,undefined],
  [    5    ,    6    ,    7    ,    8    ,    9    ],
  [undefined,   'A'   ,   'B'   ,   'C'   ,undefined],
  [undefined,undefined,   'D'   ,undefined,undefined]
];
var result = [];
var coord = function(c){
  return keyboard[c[0]][c[1]];
}
var up = function(current){
  var old = current[0];
  current[0] = current[0] > 0 ? current[0] - 1 : current[0];
  if(coord(current) === undefined)
    current[0] = old;
  return current;
}
var down = function(current){
  var old = current[0];
  current[0] = current[0] < 4 ? current[0] + 1 : current[0];
  if(coord(current) === undefined)
    current[0] = old;
  return current;
}
var left = function(current){
  var old = current[1];
  current[1] = current[1] > 0 ? current[1] - 1 : current[1];
  if(coord(current) === undefined)
    current[1] = old;
  return current;
}
var right = function(current){
  var old = current[1];
  current[1] = current[1] < 4 ? current[1] + 1 : current[1];
  if(coord(current) === undefined)
    current[1] = old;
  return current;
}
var doInstruction = function(instruction,current){
  switch (instruction) {
    case 'U':
      return up(current);
    case 'D':
      return down(current);
    case 'L':
      return left(current);
    case 'R':
      return right(current);
  }
}
var findPosition = function (key){
  var lineIndex;
  var keyIndex;
  keyboard.forEach(function(line,lIndex){
    line.forEach(function(currentKey,kIndex){
      if(key === currentKey){
        lineIndex = lIndex;
        keyIndex  = kIndex;
      }
    });
  });
  return [lineIndex,keyIndex];
};
var readLine = function readLine(line){
  var current = result[result.length - 1] || [2,0];
  line.split('').forEach(function(instruction){
      current = doInstruction(instruction,current.slice());
  });
  return current;
};
commands.forEach(function(line){
  result.push(readLine(line));
});
var convertedResult = [];
result.forEach(function(c){convertedResult.push(coord(c))} );

console.log(convertedResult);
