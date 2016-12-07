function triangle(){
  var sides = [arguments[0],arguments[1],arguments[2]];
  function isTriangle(){
    sides.sort((a, b) => a-b);
    return sides[2] < sides[0] + sides[1];
  }
  return {
    sides: sides,
    isTriangle: isTriangle
  };
};

module.exports = triangle;
