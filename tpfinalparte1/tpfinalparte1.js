let textos = ["En el año 2019, han pasado 30 años desde que una explosión que destruyó por completo la megaciudad de Tokio dio pie al inicio de la Tercera Guerra Mundial en 1988; posteriormente la megaciudad fue reconstruida y rebautizada como Neo-Tokio.", "1", "2"]
let pantalla = 1
let font1
let font2

function preload() {
  font1 = loadFont("/data/LibreBaskerville-Bold.ttf")
  font2 = loadFont("/data/LibreBaskerville-Regular.ttf")
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
  
  dibujarboton(520, 370, "Continuar");
  dibujartexto(0);
   if (pantalla === 2){
    rect(20, 20, 20, 20);
  }
  
  

}
