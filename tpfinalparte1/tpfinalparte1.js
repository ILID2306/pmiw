let textos = ["Hola", "1", "2"]
let pantalla = 1
let font1

function preload() {
  font1 = loadFont("/data/LibreBaskerville-Bold.ttf")
}

function setup() {
  createCanvas (640, 480);
  background(100);

}

function draw() {
  noStroke()
  fill(255)
  rect(0, 347, 640, 3)
  fill(0)
  rect(0, 350, 640, 130)
  dibujarboton(490, 370, "Continuar", 2);
  if (pantalla === 2){
    rect(20, 20, 20, 20);
  }
  
  

}

function mouseClicked(){
  if (mouseX > posX && mouseX < posX+150 && mouseY > posY && mouseY < posY+30){
    let pantalla = 2
  
}
}
