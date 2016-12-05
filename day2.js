var commands = process.argv.slice(2);
var keyboard = [
  [undefined,undefined,1        ,undefined,undefined],
  [undefined,2        ,3        ,4        ,undefined],
  [5        ,6        ,7        ,8        ,9],
  [undefined,'A'      ,'B'      ,'C'      ,undefined],
  [undefined,undefined,'D'      ,undefined,undefined]
];
var result = [];
var up = function(current){
  return (current > 3 )? current - 3 : current;
}
var down = function(current){
  return (current < 7 )? current + 3 : current;
}
var left = function(current){
  return (current !== 1 && current !== 4 & current !== 7 )? current - 1 : current;
}
var right = function(current){
  return (current !== 3 && current !== 6 & current !== 9 )? current + 1 : current;
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
  var pos = findPosition(result[result.length - 1] || 5);
  var current = keyboard[pos[0]][pos[1]];
  line.split('').forEach(function(instruction){
      current = doInstruction(instruction,current);
  });
  return current;
};
commands.forEach(function(line){
  result.push(readLine(line));
});

console.log(result);
