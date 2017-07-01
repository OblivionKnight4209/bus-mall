'use strict'
//create a new funcation that is an array that contains all the imgs
function myImgPool(){
  var myImgs = new Array()
  //list of imgs added below
  myImgs[1]="img/bag.jpg"
  myImgs[2]="img/banana.jpg"
  myImgs[3]="img/bathroom.jpg"
  myImgs[4]="img/boots.jpg"
  myImgs[5]="img/breakfast.jpg"
  myImgs[6]="img/bubblegum.jpg"
  myImgs[7]="img/chair.jpg"
  myImgs[8]="img/cthulhu.jpg"
  myImgs[9]="img/dog-duck.jpg"
  myImgs[10]="img/dragon.jpg"
  myImgs[11]="img/pen.jpg"
  myImgs[12]="img/pet-sweep.jpg"
  myImgs[13]="img/scissors.jpg"
  myImgs[14]="img/shark.jpg"
  myImgs[15]="img/sweep.png"
  myImgs[16]="img/tauntuan.jpg"
  myImgs[17]="img/unicorn.jpg"
  myImgs[18]="img/usb.gif"
  myImgs[19]="img/water-can.jpg"
  myImgs[20]="img/wine-glass.jpg"
  //add a function that will randomly pic an img
  var random=Math.floor(Math.random()*myImgs.length)
if (random==0)
random=1
document.write('<img src="'+myImgs[random]+'" border=0>')
}
myImgPool()
//finish the first step.
