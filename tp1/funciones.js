function dibujarCirculo(posX, posY, tam){
    for (a=24+val2; a>0; a=a-1){
  for (b =24+val2; b>0; b=b-1){
    if( (a+b) % 2==0){
      fill(col1);
    }else{
      fill(col2);
      
    }
    ellipse(posX,posY,b*tam*(mouseApretado()*0.01),b*tam*(mouseApretado()*0.01));
}
}
}
 function mouseApretado(){
  if (mouseIsPressed === true){
  val1 = dist(600, height/2, mouseX, mouseY);
  return val1;
  }else{ val1 = 100;
  return val1;
}
}
