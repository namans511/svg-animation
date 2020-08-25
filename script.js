var width = window.innerWidth;
var height = window.innerHeight;
var posx = 0;
var posy = height / 2;
var scaleFactor = width / height;
var element = document.getElementById("ele");
var id;

function animat() {
  id = setInterval(frame1, 5);
}

function frame1() {
  if (posy < -45) {
    clearInterval(id);
    // console.log("x=" + posx + " y=" + posy);
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
  if (posx > width - 40) {
    // console.log("we're kinda in");
    clearInterval(id);
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
  if (posy > height - 80) {
    // console.log("we're kinda in");
    clearInterval(id);
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
    // console.log("we're kinda in");
    clearInterval(id);
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
