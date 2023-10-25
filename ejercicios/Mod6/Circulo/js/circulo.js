class Circulo {

  constructor(punto, radio) {
    this.punto = punto;
    this.radio = radio;
  }

  //Getters
  getPunto() {
    return this.punto
  }
  getRadio() {
    return this.radio
  }
  //SETTERS
  setPunto(punto) {
    this.punto = punto;
  }
  setRadio(radio) {
    this.radio = radio;
  }

  //Metodos Circulo

  toString() {
    let mostrar = "centro: " + `${this.punto} - radio: ${this.radio}`;
    return mostrar;
  }


  distanciaCentros(otroCirculo) {

    let x1 = this.punto.getPosX()
    let y1 = this.punto.getPosY()

    let x2 = otroCirculo.punto.getPosX()
    let y2 = otroCirculo.punto.getPosY()

    console.log(" circulo1 x1,y1: " + x1, y1);
    console.log("circulo2 x2,y2: " + x2, y2);

    let potencia1 = (Math.pow((x2 - x1), 2));
    let potencia2 = (Math.pow((y2 - y1), 2))

    console.log("potencia 1" + (Math.pow((x2 - x1), 2)));
    console.log("potencia2" + (Math.pow((y2 - y1), 2)))

    let distancia = (Math.sqrt(potencia1 + potencia2)).toFixed(2)
    console.log("distancia: " + distancia)
    //let distancia = (Math.sqrt((Math.pow(x2 - x1), 2) + (Math.pow(y2 - y1), 2)));
    //console.log("distancia: " + distancia)

    return distancia
  };

  sumaR(otroCirculo) {

    let radio1 = this.radio;
    let radio2 = otroCirculo.radio;
    let sumaR = radio1 + radio2

    return sumaR
  }

  sonIguales(otroCirculo) {

    let x1 = this.punto.getPosX()
    let y1 = this.punto.getPosY()

    let x2 = otroCirculo.punto.getPosX()
    let y2 = otroCirculo.punto.getPosY()

    let r1 = this.radio
    let r2 = otroCirculo.radio

    if ((x1 == x2) && (y1 == y2) && (r1 == r2)) {
      let sonIguales = true;
      return sonIguales;
    }

    /* let centro1= this.punto
     let radio1 = this.radio;

     let centro2 = otroCirculo.punto
     let radio2 = otroCirculo.radio;

     //if ((this.punto.getPosX == otroCirculo.punto.getPosX && this.punto.getPosY == otroCirculo.punto.getPosY) && (radio1 == radio2)) {
      // return sonIguales = true;
    // */

  }

  sonConcentricos(otroCirculo) {
    let x1 = this.punto.getPosX()
    let y1 = this.punto.getPosY()

    let x2 = otroCirculo.punto.getPosX()
    let y2 = otroCirculo.punto.getPosY()


    if ((x1 == x2) && (y1 == y2)) {
      let sonConcentricos = true;
      return sonConcentricos;
    }

  }

  //si la distancia entre centros = 0 sonconcentricos true¿?
  /* let centro1= this.punto
   let radio1 = this.radio;

   let centro2 = otroCirculo.punto
   let radio2 = otroCirculo.radio;

   //if ((this.punto.getPosX == otroCirculo.punto.getPosX && this.punto.getPosY == otroCirculo.punto.getPosY) && (radio1 == radio2)) {
    // return sonIguales = true;
  // */


  igualRadio(otroCirculo) {

    let r1 = this.radio
    let r2 = otroCirculo.radio


    if (r1 == r2) {
      let igualRadio = true;

      return igualRadio
    }
  }

  sonTangentes(otroCirculo) {
    let sonTangentes;

    if (this.distanciaCentros(otroCirculo) == this.sumaR(otroCirculo)) {
      return sonTangentes = true;
    }
  }

  sonSecantes(otroCirculo) {
    let sonSecantes;
    if (this.distanciaCentros(otroCirculo) < this.sumaR(otroCirculo)&& this.distanciaCentros(otroCirculo) != 0 ) {
      return sonSecantes = true;
    }
  }
  seTocan(otroCirculo) {
    let seTocan;

   
    if (this.distanciaCentros(otroCirculo) < this.sumaR(otroCirculo) && this.distanciaCentros(otroCirculo) != 0) {
      return seTocan = true;

    }
  }


}