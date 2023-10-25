let edificios = [
    new Hospital("Hospital de Vilafranca", 2, 1950, 26),
    new Hospital("Hospital General de Catalunya", 10, 25350, 315),
    new Hotel("Hotel Hilton", 22, 73858, 583),
    new Hotel("Hotel Pepita", 3, 593, 12),
    new Cine("Cine Montecarlo", 1, 3180, 600),
    new Cine("Cine Principal", 2, 12450, 2500)
]
console.table(edificios);



function buscar(valor) {
    let indice = -1;
    let encontrado = false;
    let i = 0;
    let vueltas = edificios.length;
    while (i < vueltas && !encontrado) {
        if (edificios[i].nombre == valor) {
            indice = i;
            encontrado = true;
        }
        i++
    }
    return indice;
}

function crear() {

    let indice, vNombre, vNumPlantas, vSuperficie, vTipo, vNumPacientes, vNumHabitaciones, vNumAsistentes, vPrecioTicket, vAforoMaximo, mensaje;
    let nuevoEdificio;

    vNombre = document.getElementById("nombreEdificio").value;
    indice = buscar(vNombre);

    if (indice >= 0) {
        mensaje = "Esta edificación ya ha sido registrada y no puede ser duplicada. Sus datos son:\n";
        mensaje += edificios[indice].toJS()
        alert(mensaje);

    } else {

        vNombre = (prompt('confirma el nombre del nuevo edificio', vNombre));
        vNumPlantas = parseInt(prompt("Indica el número de plantas: ", 2));
        vSuperficie = parseFloat(prompt("Indica la superficie de la edificación: ", 3500));
        vTipo = Number(prompt('Indica el tipo de la edificación que vas a dar de alta: 1=Hospital, 2=Hotel, 3= Cine'));

        //Hacer un switch para hotel, hospital o Cine?

        if (vTipo == 1 || vTipo == 2 || vTipo == 3) {

            switch (vTipo) {
                case 1:
                    vNumPacientes = parseInt(prompt("Por favor, indica el número de pacientes de la institución hospitalaria: ", 260))
                    nuevoEdificio = new Hospital(vNombre, vNumPlantas, vSuperficie, vNumPacientes);
                    break;
                case 2:
                    vNumHabitaciones = parseInt(prompt("Por Favor, indica el número de habitaciones del hotel: ", 150));
                    nuevoEdificio = new Hotel(vNombre, vNumPlantas, vSuperficie, vNumHabitaciones);
                    break;
                case 3:
                    vAforoMaximo = parseInt(prompt("Por Favor, indica el número maximo de aforo: ", 2000));
                    nuevoEdificio = new Cine(vNombre, vNumPlantas, vSuperficie, vAforoMaximo);

            }
            edificios.push(nuevoEdificio);
            indice = edificios.length - 1;

            alert("Edificio Registrado con éxito:\n" + edificios[indice].toJS());
            console.table(edificios);

        } else {
            alert("Por favor, ingresa un número válido para dar de alta la edificación:\n" + "1 = Hospital \n" + "2 = Hotel\n" + "3 = Cine\n")

        }

    }
}


function eliminar() {

    let indice, vNombre, mensaje, confirmaEliminar;

    vNombre = document.getElementById("nombreEdificio").value;
    indice = buscar(vNombre);

    if (indice < 0) {
        alert("El edificio que busca no se encuentra registrado.");

    } else {

        mensaje = '¿Esta segur@ que desea eliminar este registro?\n' + edificios[indice].toJS();

        confirmaEliminar = confirm(mensaje);
        if (confirmaEliminar) {
            edificios.splice(indice, 1);
            alert('Edificio eliminado');
        } else {
            alert('Has presionado cancelar: el registro no se ha eliminado');
        }
        console.table(edificios);
    }
}

function mostrar() {
    let vNumAsistentes = 0;
    let vPrecioTicket = 0;
    let mostrar = "";

    let vNombre = document.getElementById("nombreEdificio").value;
    let indice = buscar(vNombre);
    let currentBuilding = edificios[indice];

    if (indice < 0) {
        alert("Lo sentimos, el edificio que buscas no se encuentra registrado.");
    } else if (currentBuilding instanceof Cine) {

        vPrecioTicket = parseFloat(prompt("Para mostrar la información completa de: \n" + vNombre.toUpperCase() + " necesitamos algunos datos adicionales. \n" +
            "Por favor, ingresa el precio del ticket por sesión: ", 0));
        vNumAsistentes = parseInt(prompt("Por favor, ingresa el número de asistentes por sesión: ", 0));

        if (vNumAsistentes > currentBuilding.maxAforo) {
            do {
                vNumAsistentes = parseInt(prompt("Error: No es posible realizar la operación." +
                    "El número de asistentes introducido supera el maximo aforo permitido.\n" +
                    "Ingrese un número valido menor que: " + currentBuilding.maxAforo, 0));
            } while (vNumAsistentes > currentBuilding.maxAforo);

        }

        mostrar += edificios[indice] + "</br>"
        mostrar += "DATOS OPERATIVOS de " + vNombre.toUpperCase() + "</br>"
        mostrar += currentBuilding.proyectarSesion(vPrecioTicket, vNumAsistentes) + "</br>";
        document.getElementById("datos").innerHTML = mostrar
    } else {

        mostrar += edificios[indice] //resto de edificios q no son cines
        document.getElementById("datos").innerHTML = mostrar
    }

}

function limpiarPantalla() {
    document.getElementById("datos").innerHTML = "";
}