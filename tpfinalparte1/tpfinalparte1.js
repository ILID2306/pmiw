let textos = {
  "Inicio" : "En el año 2019, han pasado 30 años desde que una explosión que destruyó por completo la megaciudad de Tokio dio pie al inicio de la Tercera Guerra Mundial en 1988; posteriormente la megaciudad fue reconstruida y rebautizada como Neo-Tokio.",
  "P1A" : "texto1A",
  "P2A" : "texto2A",
  "P2B" : "texto2B",

}

let pantallas = {
  "Inicio" : ["P1A"],
  "P1A" : ["P2A", "P2B"], 
  
}

let pantallaActiva = "Inicio"
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
  dibujartexto(textos[pantallaActiva]);
  dibujarboton(520, 370, "Continuar");
  if (pantallas[pantallaActiva].length === 2){
    dibujarboton(520, 420, "Opcion2");
  }
  print(pantallaActiva, textos[pantallaActiva]);
  }
  
  
function mousePressed() {
  if (pantallas[pantallaActiva].length === 1){
    if (mouseX > 520 && mouseX < 680 && mouseY > 370 && mouseY < 400){
      pantallaActiva = pantallas[pantallaActiva][0];
    }
    else if(pantallas[pantallaActiva].length === 2) {
      if (mouseX > 520 && mouseX < 680 && mouseY > 370 && mouseY < 400){
      pantallaActiva = pantallas[pantallaActiva][0];
    }
      if (mouseX > 520 && mouseX < 680 && mouseY > 400 && mouseY < 400+30){
            pantallaActiva = pantallas[pantallaActiva][1];
      }
  }
  }
}
