'use strict'
window.onload = choosePic;

var myImg = new Array("bag.jpg" "banana.jpg" "bathroom.jpg" "boots.jpg" "breakfast.jpg" "bubblegum.jpg" "chair.jpg" "cthulhu.jpg" "dog-duck.jpg" "dra");

function choosePic() {
	randomNum = Math.floor((Math.random() * myImg.length));
	document.getElementById("myImg").src = myImg[randomNum];
}
