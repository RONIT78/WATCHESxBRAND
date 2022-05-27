var slideImg = document.getElementById("slideImg");
var images = new Array(
    "w1.jpg",
    "w2.jpg",
    "w3.jpg",
    "w4.jpg",
    "w5.jpg",
    "w6.png",
    "w7.png"
);
var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2000);
}

var menu = document.getElementById("menu");

function closemenu() {
    menu.style.display = "none";

}

function openmenu() {
    menu.style.display = "inline";

}