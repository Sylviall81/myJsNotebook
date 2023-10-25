let vIdNum = "";


//PARTES = Parte I Operaciones Cliente (crear, añadir, mostrar, eliminar) | Parte II = Operaciones cuentas (crear cuenta, mostrar cuenta, ingresar dinero, retirar dinero )
//I.Operaciones CLIENTE

//A.Busqueda CLIENTE
function buscar(valor) { //BUSQUEDA CLIENTE pa ver si existe su dni
    let encontrado = false;
    let indice = -1
    let i = 0;
    let vueltas = clientesdb.length

    while (i < vueltas && !encontrado) {

        if (valor == clientesdb[i].idnumber) {
            indice = i;
            encontrado = true;
        }
        i++;
    }
    return indice;
};

function añadirCliente() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];

    if (indice >= 0) {
        indice = posicion;
        alert("Este cliente ya existe en nuestra base de datos y no puede ser duplicado.\n" + "\n" +
            currentClient.mostrarClienteJS());
    } else {

        let vNombre = prompt("Ingresa el Nombre del cliente/a: ", "Valeria");
        let vApellido = prompt("Ingresa el Apellido del cliente/a", "Olmedo")
        let newClient = new Cliente(vIdNum, vNombre, vApellido);

        clientesdb.push(newClient);
        newClient = clientesdb[clientesdb.length - 1];

        alert("El nuevo cliente ha sido añadido con éxito.");
        //aparece luego en HTML
        document.getElementById("respuesta").innerHTML = "El nuevo cliente ha sido añadido con éxito: "
        document.getElementById("showId").innerHTML = newClient.getIdNumber();
        document.getElementById("showName").innerHTML = newClient.getNombre();
        document.getElementById("showLastname").innerHTML = newClient.getApellido();
    }
}

function verCliente() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];

    if (indice >= 0) {
        document.getElementById("showId").innerHTML = currentClient.getIdNumber();
        document.getElementById("showName").innerHTML = currentClient.getNombre();
        document.getElementById("showLastname").innerHTML = currentClient.getApellido();
    } else {
        alert(" Lo sentimos, el cliente con Num. de Id: " + vIdNum + " no figura en nuestros registros. Si lo deseas, puedes agregarlo con el botón Añadir Cliente.")
    };
}

function eliminarCliente() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];

    if (indice >= 0) { //si encuentra el registro, te pide confirmación de si quieres eliminarlo o no.
        currentClient = clientesdb[posicion];
        let vConfirmación = confirm("IMPORTANTE: Esta es la información actualizada del cliente con Num. de Id: " + vIdNum + "\n" +
            currentClient.mostrarClienteJS() +
            " si haces click en ACEPTAR el registro será ELIMINADO." + "\n" + "Estas segur@ que quieres eliminarlo?");

        if (vConfirmación == true) {
            clientesdb.splice([posicion], 1);
            alert("Haz hecho click en aceptar, el cliente se ha eliminado con éxito. El cliente con Num. de Id: " + vIdNum + " ya no se encuentra en nuestros registros");
        } else {
            alert("Haz hecho click en Cancelar, el registro del cliente con Num. de Id: " + vIdNum + " no ha sido alterado.")
        };
    } else { //indice < 0 (es decir el hotel no existe: -1)
        alert("Lo sentimos, este cliente no se encuentra entre nuestros registros.")

    }
};


//II. Funciones cuentas OPERACIONES CUENTAS
//A. Busqueda cuentas

function buscarCuenta(numCuenta) { //Busqueda Cuenta Cliente
    let encontrada = false;
    let indice = -1
    let largoCliente = clientesdb.length;
    let i = 0;

    while (i < largoCliente && !encontrada) {
        let j = 0;
        let largoCuentasCliente = clientesdb[i].cuentas.length;

        while (j < largoCuentasCliente && !encontrada) {
            if (numCuenta == clientesdb[i].cuentas[j].numCuenta) {
                encontrada = true;
                indice = j;
            }
            j++
        }
        i++
    }
    return indice
}


//CREAR CUENTAS

function crearCuenta() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];
    let vConfirmacionCc = "";
    let nvaCuentaUsuario = "";
    //let encontrada = "";
    let largoCuentasCliente = clientesdb[posicion].cuentas.length;
    let numCuenta = prompt("Ingrese el número de cuenta que desea asignar a: \n" + (currentClient.mostrarClienteJS()), "0261-987654321");

    let indiceCuenta = buscarCuenta(numCuenta);
    console.log("indiceCuenta: " + indiceCuenta)

    if (indiceCuenta >= 0) {
        alert("ERROR:\n" + "Este número de cuenta pertenece a otro usuario y no puede ser duplicado.\n" + "Por favor, asigne un nuevo número de cuenta para continuar.");
        //do {pedir prompt} while (encontrada == true) Me gustaría hacerlo más adelante.

    } else {
        vConfirmacionCc = confirm("El numero de cuenta: " + numCuenta + " será asignado a: " + "\n" + "\n" + currentClient.mostrarClienteJS() + "\n" +
            " Si esta de acuerdo presione ACEPTAR para continuar.");

        if (vConfirmacionCc == true) {
            nvaCuentaUsuario = new Cuenta(numCuenta);
            currentClient.cuentas.push(nvaCuentaUsuario);
            //let lastAccount = largoCuentasCliente - 1; ¿Como puedo acceder al último registro?
            alert("La nueva cuenta ha sido creada correctamente.\n");

            document.getElementById("showAccount").innerHTML = "La nueva cuenta ha sido creada correctamente. " + "</br>" + "</br>" +
                "Actualmente, el cliente: " + "</br>" + "</br>" + currentClient.toString() + "</br>" + " Es titular de las siguientes cuentas: " +
                "<br>" + clientesdb[posicion].cuentas.toString() + "</br>";
        } else {
            alert("Has presionado cancelar, la cuenta no ha sido creada.")
        }
    }

}

//MOSTRAR CUENTAS
function mostrarCuentas() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];
    let largoCuentasCliente = clientesdb[posicion].cuentas.length;

    if (largoCuentasCliente <= 0) {
        alert(" ERROR. Actualmente, el/la cliente(a): " + "\n" + currentClient.getNombre() + " " + currentClient.getApellido() +
            " con número de identificación: " + currentClient.getIdNumber() + "\n" + " NO es titular de ninguna cuenta en esta entidad financiera ");
        document.getElementById("showAccount").innerHTML = " ERROR. Actualmente, el/la cliente(a): " + currentClient.getNombre() + " " + currentClient.getApellido() + "</br>" +
            " con número de identificación: " + currentClient.getIdNumber() + "</br>" + " NO es titular de ninguna cuenta en esta entidad financiera";
    } else {
        document.getElementById("showAccount").innerHTML = " Actualmente, el/la cliente(a): " + "<br>" + "<br>" + currentClient.toString() + "</br>" +
            " es titular de las siguientes cuentas: " + "<br>" + "<br>" + clientesdb[posicion].cuentas.toString() + "</br>";
    }
};

// INGRESA Y SACAR DINERO
function depositarDinero() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];
    let largoCuentasCliente = clientesdb[posicion].cuentas.length;
    let nCuenta = document.getElementById("nCuenta").value
    console.log("nCuenta: " + nCuenta);
    let indiceCuenta = buscarCuenta(nCuenta);
    console.log("indiceCuenta: " + indiceCuenta)

    if (indiceCuenta < 0) {
        alert("ERROR: La cuenta proporcionada no corresponde al titular o no se encuentra en nuestros registros. No es posible realizar la operación solicitada.");
    } else {

        let montoIngresado = parseFloat(prompt("Por favor, indica el monto en euros (€) que quieres ingresar a la cuenta " + currentClient.cuentas[indiceCuenta].getNumCuenta() + " :"));
        console.log("montoIngresado: " + montoIngresado)

        //if (montoIngresado.isNan()){ montoIngresado = 0};
        currentClient.cuentas[indiceCuenta].ingresarDinero(montoIngresado);
        alert("El ingreso se ha realizado correctamente.\n" + "El saldo actual de la cuenta : " + currentClient.cuentas[indiceCuenta].getNumCuenta() +
            " del/la titular: " + currentClient.getNombre() +"\n"+currentClient.getApellido() + " es: " + currentClient.cuentas[indiceCuenta].getSaldo() + " €");
        document.getElementById("infoCuentas").innerHTML = "El ingreso se ha realizado correctamente." + "</br>" +
            "El saldo actual de la cuenta : " + currentClient.cuentas[indiceCuenta].getNumCuenta() + " del/la titular: " +
            "</br>" + currentClient.getNombre() + " "+currentClient.getApellido() + " es: " + currentClient.cuentas[indiceCuenta].getSaldo() + " €";
    }
}

function retirarDinero() {
    vIdNum = document.getElementById("idUsuario").value
    let indice = buscar(vIdNum);
    let posicion = indice;
    let currentClient = clientesdb[posicion];
    let largoCuentasCliente = clientesdb[posicion].cuentas.length;
    let nCuenta = document.getElementById("nCuenta").value
    console.log("nCuenta: " + nCuenta);
    let indiceCuenta = buscarCuenta(nCuenta);
    console.log("indiceCuenta: " + indiceCuenta);
    let saldoActual = currentClient.cuentas[indiceCuenta].getSaldo();

    if (indiceCuenta < 0) {
        alert("Error.La cuenta insertada no se encuentra en nuestros registros y no es posible realizar la operación solicitada.");
    } else {
        let montoRetirar = parseFloat(prompt("Por favor, indica el monto en euros (€) que quieres retirar de la cuenta " + currentClient.cuentas[indiceCuenta].getNumCuenta() + " :"));
        console.log("montoRetirar: " + montoRetirar);

        if (saldoActual < montoRetirar) {
            alert("ERROR: No es posible realizar la operación solicitada: su saldo es insuficiente.\n" +
                "El saldo actual de la cuenta: " + currentClient.cuentas[indiceCuenta].getNumCuenta() + " es de: " + currentClient.cuentas[indiceCuenta].getSaldo() + " €");
        } else {

            //if (montoRetirar.isNan()){ montoRetirar = 0};
            currentClient.cuentas[indiceCuenta].retirarDinero(montoRetirar);
            alert("El extracto se ha realizado correctamente.\n" + "El saldo actual de la cuenta : " + currentClient.cuentas[indiceCuenta].getNumCuenta() +
                " del/la titular: " + currentClient.getNombre() + "\n"+ currentClient.getApellido() + " es: " + currentClient.cuentas[indiceCuenta].getSaldo() + " €");
            document.getElementById("infoCuentas").innerHTML = "El extracto se ha realizado correctamente." + "</br>" +
                "El saldo actual de la cuenta : " + currentClient.cuentas[indiceCuenta].getNumCuenta() + " del/la titular: " +
                "</br>" + currentClient.getNombre() + " "+currentClient.getApellido() + " es: " + currentClient.cuentas[indiceCuenta].getSaldo() + " €";
        }
    }
}

//Accesorios: 
function superClean(num) { //botones limpiar pantalla
    switch (num) {
        case 1:
            document.getElementById("respuesta").innerHTML = " ";
            document.getElementById("showId").innerHTML = " ";
            document.getElementById("showName").innerHTML = " ";
            document.getElementById("showLastname").innerHTML = " ";
            break;
        case 2:
            document.getElementById("showAccount").innerHTML = " ";
            break;
        case 3:
            document.getElementById("infoCuentas").innerHTML = " ";
            break;
        default:
            document.getElementById("respuesta").innerHTML = " ";
            document.getElementById("showId").innerHTML = " ";
            document.getElementById("showName").innerHTML = " ";
            document.getElementById("showLastname").innerHTML = " ";
            document.getElementById("showAccount").innerHTML = " ";
            document.getElementById("infoCuentas").innerHTML = " ";
            break;
    };
};

/*
function cleanInput(){
    return document.getElementById("idUsuario").innerHTML= " ";
}*/