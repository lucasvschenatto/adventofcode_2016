let Pixel = require("./Pixel");
function rotateRow(row,positions){
  let current = getPix.call(this,row,0).value;
  getPix.call(this,row,0).value = getPix.call(this,row,this.wide - 1).value;
  let previous = current;

  for(let column = 1; column < this.wide; column++){
    current = getPix.call(this,row,column).value;
    getPix.call(this,row,column).value = previous;
    previous = current;
  }
};
function rect(wide,tall){
  this._pixels.forEach((pixel)=>{
    if(pixel.column < wide && pixel.row < tall)
      pixel.value = true;
  });
};
function getPix(row,column){
  return this._pixels.find((pixel)=> pixel.row === row && pixel.column === column);
};
function mountInitial(screen){
  let result = [];
  for (let r = 0; r < screen.tall; r++) {
    for (let c = 0; c < screen.wide; c++) {
      result.push(new Pixel(r,c,false));
    }
  }
  return result;
};
function countAll(signal){
  return function(total,pixel){
    return pixel.value === signal? total+1:total;
  }
};
function countOn(){
  return this._pixels.reduce(countAll(true),0);
};
function Screen(){
  this.tall = 6;
  this.wide = 50;
  this._pixels = mountInitial(this);
  this.countOn = countOn;
  this.rect = rect;
  this.rotateRow = rotateRow;
  this.getPix = getPix;
};
module.exports = Screen;
