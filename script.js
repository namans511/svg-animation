var width = window.innerWidth;
var height = window.innerHeight;
var posx = 0;
var posy = height / 2;
var scaleFactor = width / height;
var scaleabs = scaleFactor;
var element = document.getElementById("dvd");
var logo = document.getElementById("logo");
var logoColor;

var id = setInterval(frame1, 5);

function frame1() {
  if (posy < 0) {
    clearInterval(id);
    // console.log("x=" + posx + " y=" + posy);
    pickColor();
    logo.style.fill = logoColor;
    id = setInterval(frame2, 1);
    return;
  } else {
    posx += scaleFactor;
    --posy;
    element.style.left = posx + "px";
    element.style.top = posy + "px";
  }
}
function frame2() {
  if (posx > width - 140) {
    // console.log("we're kinda in");
    clearInterval(id);
    pickColor();
    logo.style.fill = logoColor;
    id = setInterval(frame3, 1);
    return;
  } else {
    // console.log("were in");
    posx += scaleFactor;
    ++posy;
    element.style.left = posx + "px";
    element.style.top = posy + "px";
  }
}
function frame3() {
  if (posy > height - 60) {
    // console.log("we're kinda in");
    clearInterval(id);
    pickColor();
    logo.style.fill = logoColor;
    id = setInterval(frame4, 1);
    return;
  } else {
    // console.log("were in");
    posx -= scaleFactor;
    ++posy;
    element.style.left = posx + "px";
    element.style.top = posy + "px";
  }
}
function frame4() {
  if (posx < 0) {
    clearInterval(id);
    // scaleFactor = Math.random() * (scaleabs + 0.5 - scaleabs);
    // window.alert("scf=" + scaleFactor);
    pickColor();
    logo.style.fill = logoColor;
    id = setInterval(frame1, 1);
    return;
  } else {
    // console.log("were in");
    posx -= scaleFactor;
    --posy;
    element.style.left = posx + "px";
    element.style.top = posy + "px";
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickColor() {
  r = Math.floor(Math.random() * (254 - 0)) + 0;
  g = Math.floor(Math.random() * (254 - 0)) + 0;
  b = Math.floor(Math.random() * (254 - 0)) + 0;

  logoColor = "rgb(" + r + "," + g + ", " + b + ")";
}
