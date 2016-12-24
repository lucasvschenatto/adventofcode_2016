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
var firstRepeated;
var walk = function(steps){
  var s = parseInt(steps);
  for (var i = 0; i < s; i++) {
    switch (state) {
      case 'N':
        x++;
        break;
      case 'E':
        y++;
        break;
      case 'S':
        x--;
        break;
      case 'W':
        y--;
        break;
    }
    if(!firstRepeated){
      firstRepeated = history.find(function(current){
        return current[0] === x && current[1] === y;
      });
      if(firstRepeated)
        console.log(firstRepeated);
    }
    // firstRepeated = history.find(function(current){
    //   return current[0] === x && current[1] === y;
    // });
    // console.log(firstRepeated);
    history.push([x,y]);
  }
}
commands.forEach(function(command){
  turn(command[0]);
  var steps = parseInt(command.slice(1));
  walk(steps);
});
console.log(Math.abs(x)+Math.abs(y));
