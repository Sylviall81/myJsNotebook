class Punto {
    constructor (posX, posY) {
      this.posX = (posX);
      this.posY = (posY);
    }

    getPosX() {return this.posX}
    getPosY() {return this.posY}
 
    setPosX(posX) {this.posX = posX;}
    setPosY(posY) {this.posY = posY;}

    toString() {
      return `(${this.posX},${this.posY})`;
    }
}