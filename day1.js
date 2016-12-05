var commands = process.argv.slice(2);
var x = 0;
var y = 0;
var state = 'N';
var history = [];
var turnRight = function(){
  switch (state) {
    case 'N':
      state = 'E';
      break;
    case 'E':
      state = 'S';
      break;
    case 'S':
      state = 'W';
      break;
    case 'W':
      state = 'N';
      break;
  }
}
var turnLeft = function(){
  switch (state) {
    case 'N':
      state = 'W';
      break;
    case 'W':
      state = 'S';
      break;
    case 'S':
      state = 'E';
      break;
    case 'E':
      state = 'N';
      break;
  }
}
var turn = function(c){
  switch (c) {
    case 'R':
      turnRight();
      break;
    case 'L':
      turnLeft();
      break;
  }
}
var walk = function(steps){
  var s = parseInt(steps);
  switch (state) {
    case 'N':
      x += s;
      break;
    case 'E':
      y += s;
      break;
    case 'S':
      x -= s;
      break;
    case 'W':
      y -= s;
      break;
  }


}
var filterNumber = function(s){
  return parseInt(s);
}
var firstRepeated;
commands.forEach(function(command){
  turn(command[0]);
  var steps = filterNumber(command.slice(1));
  walk(steps);
  history.push([x,y]);
  if(!firstRepeated){
    firstRepeated = history.find(function(current){
      return current[0] === x && current[1] === y;
    });
    if(firstRepeated)
      console.log(firstRepeated);
  }
});
console.log(Math.abs(x)+Math.abs(y));
