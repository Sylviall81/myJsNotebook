

function calcular (){

  //Elementos circulo1 
  let posX1 = parseInt(document.getElementById("Xc1").value)
  let posY1 = parseInt(document.getElementById("Yc1").value)
  let r1 = parseInt(document.getElementById("radio1").value)

  //elementos circulo 2
  let posX2 = parseInt(document.getElementById("Xc2").value)
  let posY2 = parseInt(document.getElementById("Yc2").value)
  let r2= parseInt(document.getElementById("radio2").value)


//Objeto punto (centro)
  let cntro1 = new Punto (posX1,posY1); 
  let cntro2 = new Punto (posX2,posY2);
  console.log ("c1"+cntro1);
  console.log ("c2"+cntro2);

//objeto circulo (compuesto x punto y radio)
  let circle1 = new Circulo (cntro1,r1);
  let circle2 = new Circulo (cntro2,r2);


  document.getElementById("circle1").innerHTML = "Circulo 1: " +circle1.toString();

  document.getElementById("circle2").innerHTML = "Circulo 2: "+circle2.toString();
 document.getElementById("sumaRadios").innerHTML = "La suma de sus radios es: "+circle1.sumaR(circle2);
  document.getElementById("1cDistCentros").innerHTML = "La distancia entre sus centros es: "+ circle1.distanciaCentros(circle2); 
  document.getElementById("2sonIguales").innerHTML = ((circle1.sonIguales(circle2))? "Sí" : "No");
  document.getElementById("3sonConcentricos").innerHTML = ((circle1.sonConcentricos (circle2)) ? "Sí" : "No");
  document.getElementById("4mismoRadio").innerHTML = (circle1.igualRadio(circle2)? "Sí" : "No");
  document.getElementById("5sonTangentes").innerHTML = ((circle1.sonTangentes (circle2)) ? "Sí" : "No");
  document.getElementById("6sonSecantes").innerHTML = ((circle1.sonSecantes (circle2)) ? "Sí" : "No");
  document.getElementById("7seTocan").innerHTML = ((circle1.seTocan (circle2)) ? "Sí" : "No");

}


