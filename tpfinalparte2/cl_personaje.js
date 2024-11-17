class Personaje {
  constructor() {

    this.x = width/2;
    this.y = height-50;
    this.vel = 9;
    this.ancho = 50;
    this.alto = 20;
  }
  actualizar() {
    this.mover();
    this.dibujar();
  }


  dibujar() {
    push();
    translate(this.x, this.y);
    rectMode(CENTER);
    strokeWeight(3);
    stroke(200,200,0);
    fill(200, 0, 0);
    rect(0, 0, this.ancho, this.alto);
    pop();
  }
  mover() {
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=this.vel;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=this.vel;
      }
 
      this.x = constrain(this.x, 50, width-50);
    }
  }
  reinicioTotal(){
    this.x = width/2;
    this.y = height-50;
    this.vel = 9;
    this.ancho = 50;
    this.alto = 20;
  }
  //mover() {
  //      this.x == mouseX;
  //  }
  }
