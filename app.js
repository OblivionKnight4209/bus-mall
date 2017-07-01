'use strict'
var firstImg = document.getElementByClassName('first-img')[0];
var secImg = document.getElementByClassName('sec-img')[0];
var thirdImg = document.getElementByClassName('third-img')[0];
//create a new funcation that is an array that contains all the imgs

//consture function for imgs <---code was shown and proved by Jessica with her permission
function myImgPool(imageName, path){
  this.imageName = imageName; // name of each image
  this.path = path; //path where the file lives
  this.timesDisplayed = 0; //starts at 0 because nothing was selected
  this.timesClicked = 0;
  images.push(images);
}
//creating a prototype to do something?
// myImgPool.prototype.randomNum = function(){
//   return Math.floor(Math.random()*((this.imageName + 1);
// }
//listing out the products creating new imgs
  var bag= new Image('img/bag.jpg');
  var banana= new Image('img/banana.jpg');
  var bathroom= new Image('img/bathroom.jpg');
  var breakfast= new Image('img/breakfast.jpg');
  var bubblegum= new Image('img/bubblegum.jpg');
  var chair= new Image('img/cthulhu.jpg');
  var dogDuck= new Image('img/dog-duck.jpg');
  var dragon= new Image('img/dragon.jpg');
  var pen= new Image('img/pen.jpg');
  var petSweep= new Image('img/pet-sweep/jpg');
  var scissors= new Image('img/scissors.jpg');
  var shark= new Image('img/shark.jpg');
  var sweep= new Image('img/sweep.png');
  var tauntuan= new Image('img/tauntuan.jpg');
  var unicorn= new Image('img/unicorn.jpg');
  var usb= new Image('img/usb.gif');
  var waterCan= new Image('img/water-can.jpg');
  var wineGlass= new Image('img/wine-glass.jpg');
//write to the html img src
function myRandomImg1(){
 var index = Math.floor(Math.random()*im)
}






































//BAD CODE//
// function myImgPool(){
//   var myImgs = new Array()
//   //list of imgs added below
//   myImgs[1]="img/bag.jpg"
//   myImgs[2]="img/banana.jpg"
//   myImgs[3]="img/bathroom.jpg"
//   myImgs[4]="img/boots.jpg"
//   myImgs[5]="img/breakfast.jpg"
//   myImgs[6]="img/bubblegum.jpg"
//   myImgs[7]="img/chair.jpg"
//   myImgs[8]="img/cthulhu.jpg"
//   myImgs[9]="img/dog-duck.jpg"
//   myImgs[10]="img/dragon.jpg"
//   myImgs[11]="img/pen.jpg"
//   myImgs[12]="img/pet-sweep.jpg"
//   myImgs[13]="img/scissors.jpg"
//   myImgs[14]="img/shark.jpg"
//   myImgs[15]="img/sweep.png"
//   myImgs[16]="img/tauntuan.jpg"
//   myImgs[17]="img/unicorn.jpg"
//   myImgs[18]="img/usb.gif"
//   myImgs[19]="img/water-can.jpg"
//   myImgs[20]="img/wine-glass.jpg"
// }
//   //add a function that will randomly pic an img
//   var random=Math.floor(Math.random()*myImgs.length){
// for (var )
// //the document.write is creating its own img tag on the html and created the same img three times
// document.write('<img src="'+myImgs[random]+'" class=photo1 border=0>')
// document.write('<img src="'+myImgs[random]+'" class=photo2 border=0>')
// document.write('<img src="'+myImgs[random]+'" class=photo3 border=0>')
// }
// myImgPool()
// //finish the first step.
