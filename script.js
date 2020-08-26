var width = window.innerWidth;
var height = window.innerHeight;
var posx = width / 2;
var posy = 0;
var scaleFactor = width / height;
var x_velocity = 1;
var y_velocity = -1;
var element = document.getElementById("dvd");
var logo = document.getElementById("logo");
var logoColor;
var x = 1;
var id = setInterval(frame, 1);

function checkHitBox() {
  var f = 0;
  if (posy < 0 || posy > height - 60) {
    y_velocity = -y_velocity;
    f = 1;
  } else if (posx < 0 || posx > width - 140) {
    x_velocity = -x_velocity;
    f = 1;
  }
  return f;
}

function frame() {
  posy += y_velocity;
  posx += x_velocity;
  element.style.left = posx + "px";
  element.style.top = posy + "px";
  var hit = checkHitBox();
  if (hit == 1) {
    pickColor();
    logo.style.fill = logoColor;
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
