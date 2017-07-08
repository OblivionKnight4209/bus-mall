'use strict';
var bag = new Items('bag', 'img/bag.jpg');
var banana = new Items('banana', 'img/banana.jpg');
var bathroom = new Items('bathroom', 'img/bathroom.jpg');
var boots = new Items('boots', 'img/boots.jpg');
var breakfest = new Items('breakfast', 'img/breakfast.jpg');
var bubblegum = new Items('bubblegum', 'img/bubblegum.jpg');
var chair = new Items('chair', 'img/chair.jpg');
var cthulhu = new Items('cthulhu', 'img/cthulhu.jpg');
var dog = new Items('dogDuck', 'img/dog-duck.jpg');
var dragon = new Items('dragon', 'img/dragon.jpg');
var pen = new Items('pen', 'img/pen.jpg');
var petSweep = new Items('petSweep', 'img/pet-sweep.jpg');
var scissors = new Items('scissors', 'img/scissors.jpg');
var shark = new Items('shark', 'img/shark.jpg');
var sweep = new Items('sweep', 'img/sweep.png');
var tauntaun = new Items('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Items('unicorn', 'img/unicorn.jpg');
var usb = new Items('usb', 'img/usb.gif');
var waterCan = new Items('waterCan', 'img/water-can.jpg');
var wineGlass = new Items('wineGlass', 'img/wine-glass.jpg');
var itemsArr = [bag, banana, bathroom, boots, breakfest, chair, cthulhu, dog, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
function Items(name, img){
  this.name = name;
  this.img = img;
  this.timesDisplayed = 0; //starts at 0 because nothing was selected
  this.timesClicked = 0;
}
var photo1 = document.getElementById('img1');
var photo2 = document.getElementById('img2');
var photo3 = document.getElementById('img3');
var photoArr = [photo1, photo2, photo3];
for (var i = 0; i < photoArr.length; i++){
  photoArr[i].src = itemsArr[randomNum()].img;
}


function randomNum() {
  var min = 1;
  var max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
}
var clicks = 0;

function numClicks () {
  var clicksOne = document.getElementById('img1Click');
  var clicksTwo = document.getElementById('img2Click');
  var clicksThree = document.getElementById('img3Click');
    console.log(numClicks());
}

img1Click.addEventListener('submit', handleClicks);
img2Click.addEventListener('submit', handleClicks);
img3Click.addEventListener('submit', handleClicks);

function handleClicks(event){
  event.preventDefault();
  clicks++;
}
debugger;




























//   var images = [];//place holder for objects
//   var randNum =[];
//
// function Image(imageName, path){
//   this.imageName = imageName; // name of each image
//   this.path = path; //path where the file lives
//   this.timesDisplayed = 0; //starts at 0 because nothing was selected
//   this.timesClicked = 0;
//   images.push(this);
// };
// //listing out the products creating new imgs
//   var bag = new Image('img/bag.jpg');
//   var banana= new Image('img/banana.jpg');
//   var bathroom= new Image('img/bathroom.jpg');
//   var breakfast= new Image('img/breakfast.jpg');
//   var bubblegum= new Image('img/bubblegum.jpg');
//   var chair= new Image('img/cthulhu.jpg');
//   var dogDuck= new Image('img/dog-duck.jpg');
//   var dragon= new Image('img/dragon.jpg');
//   var pen= new Image('img/pen.jpg');
//   var petSweep= new Image('img/pet-sweep.jpg');
//   var scissors= new Image('img/scissors.jpg');
//   var shark= new Image('img/shark.jpg');
//   var sweep= new Image('img/sweep.png');
//   var tauntuan= new Image('img/tauntuan.jpg');
//   var unicorn= new Image('img/unicorn.jpg');
//   var usb= new Image('img/usb.gif');
//   var waterCan= new Image('img/water-can.jpg');
//   var wineGlass= new Image('img/wine-glass.jpg');
//
// console.log(images);
// console.log(images.length);
//
// //need to create a function that randomly creates a number
//
// function randNum() {
//   var selectOne = Math.floor((Math.random()* images.length) + 1);
// console.log(selectOne);//can not see the log
//   var selectTwo = Math.floor((Math.random()* images.length) + 1);
//   console.log(selectTwo);
//   var selectThree = Math.floor((Math.random() * images.length) + 1);
//   console.log(selectThree);
// };
// now that i have consturcter function that brings back the array for images and consturcter for three different random numbers
// need to create a new one that combies the two


//In order to make an image clickable need to set the image to a background image






















// //global images
// var firstImg = document.getElementsByClassName('first-img')[0];
// var secImg = document.getElementsByClassName('sec-img')[0];
// var thirdImg = document.getElementsByClassName('third-img')[0];
// //create a new funcation that is an array that contains all the imgs
//
// //consture function for imgs <---code was shown and proved by Jessica with her permission
// //Now I have my set need to creat a function that that will loop for images
// function createNewImageset(){
//   var imgSet = [];
//   var randNum = [];
//
//   for (var i = 0; 1 < 3; i++){ //loop i think that creates it three times
//     randomNum = Math.floor(Math.random() * (image.length - 1));
//   }
// }
//
// //write to html to show display
// function showRandomImg(){
//   document.getElementsByClassName('first-img') = imgSet[0];
//   document.getElementsByClassName('sec-img') = imgSet[1];
//   document.getElementsByClassName('third-img') = imgSet[2];
// };





































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
  //add a function that will randomly pic an img
//   var random=Math.floor(Math.random()*myImgs.length){
// for (var )
//the document.write is creating its own img tag on the html and created the same img three times
// document.write('<img src="'+myImgs[random]+'" class=photo1 border=0>')
// document.write('<img src="'+myImgs[random]+'" class=photo2 border=0>')
// document.write('<img src="'+myImgs[random]+'" class=photo3 border=0>')
//  }
// myImgPool()
// //finish the first step.
