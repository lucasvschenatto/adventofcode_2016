var commands = process.argv.slice(2);
var keyboard = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
var result = [];
var up = function(current){
  var result = current - 3;
  return result>0 ? result : current;
}
var down = function(current){
  var result = current + 3;
  return result<10 ? result : current;
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
var readLine = function readLine(line){
  var current = result[result.length - 1] || 5;
  line.split('').forEach(function(instruction){
      current = doInstruction(instruction,current);
  });
  return current;
};
commands.forEach(function(line){
  result.push(readLine(line));
});

console.log(result);
