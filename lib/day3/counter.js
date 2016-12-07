var triangleMaker = require('./triangle');
function counter(){
  var inputs = Array.prototype.slice.call(arguments);
  var count = 0;
  inputs.forEach((input)=> {
    if(triangleMaker(input).isTriangle())
      count++;
  });
  return count;
}
module.exports = counter;
