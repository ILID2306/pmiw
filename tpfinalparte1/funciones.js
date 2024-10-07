function dibujarboton(posX, posY, texto){
  if (mouseX > posX && mouseX < posX+150 && mouseY > posY && mouseY < posY+30){
    fill(255);
  } else {
  fill(255, 145, 0);
  }
  rect(posX, posY, 150, 30);
  noStroke()
  fill(255)
  textSize(20)
  textFont("Font1")
  if (mouseX > posX && mouseX < posX+150 && mouseY > posY && mouseY < posY+30){
    fill(0);
  } else {
  fill(255);
  }
  text(texto, posX+5, posY+21);
}

function dibujartexto(numdetextos){
 textFont("Font2");
 textSize(16);
 fill(255);
 text(textos[numdetextos], 10, 360, 510, 150)
 }
