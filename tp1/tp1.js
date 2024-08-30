// https://www.youtube.com/watch?v=z1Hb9qm8c8o

let img;
let num = 10;
let col1 = 255;
let col2 = 0;
let num1 = 0;
let val2 = 0;

function preload() {
  img= loadImage("data/F_35.png");
}

function setup() {
  createCanvas (800, 400);
  background(255);
  image(img, 0, 0);
}
function draw() {
  background(255);
  
  //println("X:");
  //println(mouseX);
  //println("Y:");
  //println(mouseY);
  noStroke();
  dibujarCirculo(675, 200, 28);
  dibujarCirculo(718, 273, 6.5);
  dibujarCirculo(678, 120, 9.7);
  dibujarCirculo(656, 375, 6.5);
  dibujarCirculo(472, 257, 14.5);
  dibujarCirculo(464, 67, 7);
  dibujarCirculo(578, 51, 4.1);
  dibujarCirculo(600, 200, 12.5);
  image(img, 0, 0);
}
function keyPressed() {
  if (key === 'r' || key === 'R') {
    col1 = 255;
    col2 = 0;
    val2 = 0;
  } else if (key === 'e' || key === 'E') {
    val2 = val2+2;
  } else {
    col1 = 0;
    col2 = 255;
  }
}
