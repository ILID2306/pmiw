//https://youtu.be/8TqXv-cYdDg
let pantallaActiva = "Inicio"
let font1
let font2
let sonido

function preload() {
  font1 = loadFont("/data/fonts/LibreBaskerville-Bold.ttf");
  font2 = loadFont("/data/fonts/LibreBaskerville-Regular.ttf");
  imagenes["Inicio"] = loadImage("/data/imagenes/escena1.jpg");
  imagenes["P1A"] = loadImage("/data/imagenes/escena2.jpg");
  imagenes["P2A"] = loadImage("/data/imagenes/escena3.jpg");
  imagenes["P3A"] = loadImage("/data/imagenes/escena4.jpg");
  imagenes["P4A"] = loadImage("/data/imagenes/escena5.jpg");
  imagenes["P5A"] = loadImage("/data/imagenes/escena6.jpg");
  imagenes["P6A"] = loadImage("/data/imagenes/escena7.jpg");
  imagenes["P7A"] = loadImage("/data/imagenes/escena8.jpg");
  imagenes["P8A"] = loadImage("/data/imagenes/escena9.jpg");
  imagenes["P9A"] = loadImage("/data/imagenes/escena10.jpg");
  imagenes["P10A"] = loadImage("/data/imagenes/escena11.jpg");
  imagenes["P6B"] = loadImage("/data/imagenes/escena12.jpg");
  imagenes["P7B"] = loadImage("/data/imagenes/escena13.jpg");
  imagenes["P8B"] = loadImage("/data/imagenes/escena14.jpg");
  imagenes["F1A"] = loadImage("/data/imagenes/escena15.jpg");
  imagenes["F2A"] = loadImage("/data/imagenes/escena16.jpg");
  imagenes["F2C"] = loadImage("/data/imagenes/escena17.jpg");
  imagenes["F3A"] = loadImage("/data/imagenes/escena18.jpg");
  imagenes["F3B"] = loadImage("/data/imagenes/escena19.jpg");
  imagenes["F3C"] = loadImage("/data/imagenes/escena20.jpg");
  imagenes["Creditos"] = loadImage("/data/imagenes/escena21.jpg");
  sonido = loadSound("/data/sonidos/sonido.mp3");
}

function setup() {
  createCanvas (640, 480);
  background(100);

}

function draw() {
  image(imagenes[pantallaActiva], 0, 0, width, height);
  noStroke()
  fill(255)
  rect(0, 347, 640, 3)
  fill(0)
  rect(0, 350, 640, 130)
  dibujartexto(textos[pantallaActiva], 360);
  dibujartexto(informacion[pantallaActiva], 460);
  dibujarboton(520, 370, botones[pantallaActiva][0]);
  if (pantallas[pantallaActiva].length === 2){
    dibujarboton(520, 420, botones[pantallaActiva][1]);
  }
  if (pantallaActiva === "Inicio"){
  image(imagenes[pantallaActiva], 0, 0, width, height);
  textAlign(CENTER);
  fill(255, 40, 40);
  textSize(80);
  stroke(0);
  strokeWeight(5);
  text("AKIRA", width/2, height/2);
  noStroke();
  if (mouseX > 300 && mouseX < 380 && mouseY > 300 && mouseY < 330){
    fill(255);
  } else {
  fill(255, 145, 0);
  }
  rect(280, 300, 80, 30);
  noStroke()
  fill(255)
  textSize(20)
  textFont("Font1")
  if (mouseX > 300 && mouseX < 380 && mouseY > 300 && mouseY < 330){
    fill(0);
  } else {
  fill(255);
  }
  text("JUGAR", width/2, 300+21);
  textAlign(LEFT);
  }
  if (pantallaActiva === "Creditos"){
  image(imagenes[pantallaActiva], 0, 0, width, height);
  textAlign(CENTER);
  fill(255);
  text("Créditos:", width/2, height/4);
  textSize(18);
  text("Arte y Diseño: Katsuhiro Otomo", width/2, height/4 + 70);
  text("Música: Dr. Shoji Yamashiro", width/2, height/4 + 105);
  text("Aventura Grafica por Ulises de Sousa", width/2, height/4 + 140);
  if (mouseX > 230 && mouseX < 230 + 220 && mouseY > 300 && mouseY < 330){
    fill(255);
  } else {
  fill(255, 145, 0);
  }
  rect(210, 300, 220, 30);
  noStroke()
  fill(255)
  textSize(20)
  textFont("Font1")
  if (mouseX > 230 && mouseX < 230 + 220 && mouseY > 300 && mouseY < 330){
    fill(0);
  } else {
  fill(255);
  }
  text("VOLVER A EMPEZAR", width/2, 321);
  textAlign(LEFT);
  }
  print(pantallaActiva);
  }
  
  
  
function mousePressed() {
  if (pantallas[pantallaActiva].length === 1){
    if (mouseX > 520 && mouseX < 680 && mouseY > 370 && mouseY < 400){
      pantallaActiva = pantallas[pantallaActiva][0];
    }
  }
  else if(pantallas[pantallaActiva].length === 2) {
      if (mouseX > 520 && mouseX < 680 && mouseY > 370 && mouseY < 400){
      pantallaActiva = pantallas[pantallaActiva][0];
    }
      if (mouseX > 520 && mouseX < 680 && mouseY > 420 && mouseY < 420+30){
            pantallaActiva = pantallas[pantallaActiva][1];
      }
  }
  if (pantallaActiva === "Inicio"){
    if (mouseX > 300 && mouseX < 380 && mouseY > 300 && mouseY < 330){
      pantallaActiva = pantallas[pantallaActiva][0];
      sonido.loop();
    }
  }
  if (pantallaActiva === "Creditos"){
    if (mouseX > 230 && mouseX < 230+220 && mouseY > 300 && mouseY < 330){
      pantallaActiva = pantallas[pantallaActiva][0];
      sonido.stop();
    }
  }
  }
