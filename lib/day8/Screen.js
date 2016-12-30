let Pixel = require("./Pixel");
function rotateRow(row,positions){
  getPix(row,1).value = getPix(row,0).value;
  // for (let wide = 1; wide < this.wide; wide++) {
  //   let right  = this._pixels.find((pixel)=>pixel.tall === row && pixel.wide === wide);
  //   let left = this._pixels.find((pixel)=>pixel.tall === row && pixel.wide === wide - 1);
  //   right.value = left.value;
  // }
}
function rect(wide,tall){
  this._pixels.forEach((pixel)=>{
    if(pixel.column < wide && pixel.row < tall)
      pixel.value = true;
  });
}
function getPix(row,column){
  return this._pixels.find((pixel)=> pixel.row === row && pixel.column === column);
}
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
}
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
