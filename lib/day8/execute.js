let Screen = require("./Screen");
function executeInstruction(screen,instruction){
  if(instruction.includes("rect ")){
    let size = instruction.slice(5).split("x");
    let x = parseInt(size[0]);
    let y = parseInt(size[1]);
    screen.rect(x,y);
  }
  else if(instruction.includes("rotate column x=")){
    let rotation = instruction.slice(16).split(" by ");
    let x = parseInt(rotation[0]);
    let positions = parseInt(rotation[1]);
    screen.rotateColumn(x,positions);
  }
  else if(instruction.includes("rotate row y=")){
    let rotation = instruction.slice(13).split(" by ");
    let y = parseInt(rotation[0]);
    let positions = parseInt(rotation[1]);
    screen.rotateRow(y,positions);
  }
}
function execute(screen,instructions){
  if(Array.isArray(instructions))
    instructions.forEach((instruction)=>executeInstruction(screen,instruction));
  else
    executeInstruction(screen,instructions);
};
module.exports = execute;
