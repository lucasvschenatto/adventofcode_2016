var Pixel = require("./Pixel");
function rect(a,b){
  this._pixels.forEach((pixel)=>{
    if(pixel.wide < a && pixel.tall < b)
      pixel.value = true;
  });
}
function mountInitial(screen){
  let r = [];
  for (let t = 0; t < screen.tall; t++) {
    for (let w = 0; w < screen.wide; w++) {
      r.push(new Pixel(w,t,false));
    }
  }
  return r;
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
};
module.exports = Screen;
