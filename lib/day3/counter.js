var makeTriangle = require('./triangle');
function counter(){
  var inputs = Array.prototype.slice.call(arguments);
  var count = 0;
  inputs.forEach((input)=> {
    var triangle = makeTriangle(...input);
    if(triangle.isTriangle()){
      count++;
    }
  });
  return count;
}
module.exports = counter;
