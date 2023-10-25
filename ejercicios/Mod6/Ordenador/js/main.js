/*
la función crear Ordenadores() .        
        Dentro de esta función, pediremos al usuario mediante promtps los datos de dos ordenadores. 
        Una vez introducidos los datos de ambos ordenadores, llama a los métodos de la clase Ordenador para comprobar que funcionan correctamente.*/



let posicion = 0;

let vOrdenadorId = 0;

let currentMachine = "";


function ordenadorDetail() {
    vOrdenadorId = Number(document.getElementById("ordenadorId").value);
    console.log(vOrdenadorId);
    currentMachine = catalogo[vOrdenadorId]
    
    document.getElementById("ordenadorInfo").innerHTML = currentMachine.toString();
    alert(currentMachine.mostrarJS());
}

function ejecutarPrograma() {
    vOrdenadorId = Number(document.getElementById("ordenadorId").value);
    console.log(vOrdenadorId);
    currentMachine = catalogo[vOrdenadorId]

    let parPrograma = prompt("Introduce el programa que quieres ejecutar: ", "Firefox");
    currentMachine.toExecute(parPrograma);
}


function buscar(valor) {

    let encontrado = false;
    let indice = -1
    let i = 0;
    let vueltas = catalogo.length

    while (i < vueltas && !encontrado) {

        if (valor == catalogo[i].modelo) {
            indice = i;
            encontrado = true;
        }
        i++;
    }
    return indice;
}



function crearOrdenador() {

    let varModelo = prompt("Ingresa el modelo del ordenador: ", "IdeaPad");
    let indice = buscar(varModelo);
    let posicion = indice;
    let currentMachine = catalogo[posicion]; 

    if (indice >= 0) {
        indice = posicion;
        alert("Este modelo de ordenador ya existe en nuestro catálogo y no puede ser creado de nuevo.\n" +
            currentMachine.mostrarJS());
    } else {

        let varMarca = prompt("Ingresa la marca del ordenador: ", "Lenovo");
        let varProcesador = prompt("Ingresa el procesador del ordenador: ", "AMD Ryzen 5");
        let varMemorioRAM = prompt("Ingresa la memoria RAM del ordenador: ", "8Gigas");
        let varDiscoDuro = prompt("Ingresa la capacidad del ordenador: ", "512GB");

        let newDevice = new Ordenador(varMarca, varModelo, varProcesador, varMemorioRAM, varDiscoDuro);

        catalogo.push(newDevice);
        let NewMachine = catalogo[catalogo.length - 1];

        alert("El nuevo producto ha sido añadido con éxito: \n" + "\n"+
            NewMachine.mostrarJS())//no estoy segura si esto es necesario o si puedo poner posicion.
    }

}


function modificarOrdenador() {

    alert("IMPORTANTE: Recuerda, el programa solo permite modificar las siguientes categorías de información:\n" +
        "el procesador" + "\n" + "la cantidad de memoria RAM " +"\n"+ "y la capacidad del disco duro.")

    let varModeloMod = prompt("Por favor,señala el modelo del ordenador que deseas modificar:", "Mac Book Pro");
    let indice = buscar(varModeloMod);
    console.log(indice);
    let posicion = indice
    let deviceChange = catalogo[posicion]

    if (indice >= 0) { //si encuentra el registro, te lo muestra y pide confirmar si quieres o no alterarlo

        let vConfirmacion =
            confirm("Esta es la información actual del ordenador que deseas modificar:\n" +
                deviceChange.mostrarJS()+ "\n" +"\n"+ "¿Estas segur@ que quieres alterar este registro?");

        if (vConfirmacion == true) {

            let procesadorMod = prompt("Ingresa la información del nuevo Procesador: ", deviceChange.getProcesador() );
            deviceChange.setProcesador(procesadorMod);

            let memoriaRAMMod = prompt("Ingresa la información de la Memoria RAM: ", deviceChange.getMemoriaRam() );
            deviceChange.setMemoriaRAM(memoriaRAMMod);

            let discoDuroMod = prompt("Ingresa la capacidad del nuevo Disco Duro: ", deviceChange.getDiscoDuro() );
            deviceChange.setDiscoDuro(discoDuroMod);

            alert("Has modificado el registro.La Informacion actualizada es: \n"+"\n"+
            deviceChange.mostrarJS())
        } else {
            alert("Has presionado cancelar, el registro no se modificará.");
        }

    } else {

        alert("Este modelo de ordenador no existe en nuestro catálogo" +"\n" +
            "Presiona el botón añadir para insertar un nuevo producto.");
    }

}



