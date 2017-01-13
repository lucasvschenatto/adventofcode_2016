let Pixel = require("./Pixel");

function positionBack(current,quantity,limit){
  let pos = current - quantity;
  return pos >= 0 ? pos : pos + limit;
}

function rotateRow(row,positions){
  let copy = this._pixels.map((pixel)=> new Pixel(pixel.row,pixel.column,pixel.value));
  for(let column = 0; column < this.wide; column++){
    let col = positionBack(column,positions,this.wide);
    let value = getPix.call({"_pixels":copy},row,col).value;
    getPix.call(this,row,column).value = value;
  }
};

function rotateColumn(column,positions){
  let copy = this._pixels.map((pixel)=> new Pixel(pixel.row,pixel.column,pixel.value));
  for(let row = 0; row < this.tall; row++){
    let r = positionBack(row,positions,this.tall);
    let value = getPix.call({"_pixels":copy},r,column).value;
    getPix.call(this,row,column).value = value;
  }
};
function rect(wide,tall){
  this._pixels.forEach((pixel)=>{
    if(pixel.column < wide && pixel.row < tall)
      pixel.value = true;
  });
};
function getPix(row,column){
  let result = this._pixels.find((pixel)=> pixel.row === row && pixel.column === column);
  return result;
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
  this.rotateColumn = rotateColumn;
  this.getPix = getPix;
};
module.exports = Screen;
