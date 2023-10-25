let vName = "";

function buscar(valor) {
    let encontrado = false;
    let indice = -1
    let i = 0;
    let vueltas = hotelesdb.length

    while (i < vueltas && !encontrado) {

        if (valor == hotelesdb[i].nombre) {
            indice = i;
            encontrado = true;
        }
        i++;
    }
    return indice;
};

function añadirHotel() {

    vName = document.getElementById("nombreHotel").value
    let indice = buscar(vName);
    let posicion = indice;
    let currentHotel = hotelesdb[posicion];

    if (indice >= 0) {
        indice = posicion;
        alert("Este hotel ya existe en nuestra base de datos y no puede ser duplicado.\n" + "\n" +
            currentHotel.mostrarHotelJS());
    } else {

        let vHabitaciones = prompt("Ingresa el número de habitaciones del hotel", 0);
        let vPlantas = prompt("Ingresa el número de plantas", 0)
        let vSuperficie = prompt("Ingresa la superfice total del hotel", " 0mts2");

        let newRegister = new Hotel(vName, vHabitaciones, vPlantas, vSuperficie);

        hotelesdb.push(newRegister);
        newRegister = hotelesdb[hotelesdb.length - 1];

        alert("El nuevo registro ha sido añadido con éxito.");
        //newRegister.mostrarHotelJS());
        document.getElementById("respuesta").innerHTML = "El nuevo registro ha sido añadido con éxito: " + "</br>" +
            newRegister.toString()+  "</br>" +newRegister.calcularMantenimiento();
    }

}

function verHotel() {

    vName = document.getElementById("nombreHotel").value
    let indice = buscar(vName);
    let posicion = indice;
    let currentHotel = "";
    

    if (indice >= 0) {
        indice = posicion;
        currentHotel = hotelesdb[posicion];
        
        // alert("Este hotel ya existe en nuestra base de datos y no puede ser duplicado.\n" +"\n"+
        //   currentHotel.mostrarHotelJS());
        document.getElementById("respuesta").innerHTML = "Esta es la información completa del hotel: " + vName + 
        "</br>"+"</br>"+currentHotel.toString() + "</br>"+"</br>" + currentHotel.calcularMantenimiento();

    } else {

        alert(" Lo sentimos, el hotel solicitado: " + vName + " no figura en nuestros registros. Si lo deseas, puedes agregarlo a nuestra base de datos con el botón Añadir Hotel.")

    };

}

function changeHotel(){
    vName = document.getElementById("nombreHotel").value;
        let indice = buscar(vName);
        let posicion = indice;
        let changeRegister = "";

        if (indice >= 0) { //si encuentra el registro, te lo muestra y pide confirmar si quieres o no alterarlo    
            changeRegister = hotelesdb[posicion];
        
                let vConfirmacion =
                    confirm("Esta es la información actualizada del hotel que deseas modificar:\n" +
                        changeRegister.mostrarHotelJS()+"\n" +"\n"+ "¿Estas segur@ que quieres alterar este registro?");
        
                if (vConfirmacion == true) {

                    let nombreMod = prompt("Actualiza la información del nombre: ", changeRegister.getNombre() );
                    changeRegister.setNombre(nombreMod);
        
                    let habMod = prompt("Actualiza la información de las habitaciones ", changeRegister.getHabitaciones() );
                    changeRegister.setHabitaciones(habMod);
        
                    let plantaMod = prompt("Actualiza la información del número de plantas: ", changeRegister.getPlantas() );
                    changeRegister.setPlantas(plantaMod);
        
                    let superficieMod = prompt("Actualiza la información de la superficie em mts2: ", changeRegister.getSuperficie() );
                    changeRegister.setSuperficie(superficieMod);
        
                    alert("Has modificado el registro. La Informacion actualizada es: \n"+"\n"+
                    changeRegister.mostrarHotelJS());
                } else {
                    alert("Has presionado cancelar, el registro no ha sido alterado.");
                }
        
            } else {
                alert("Lo sentimos, este hotel no se encuentra entre nuestros registros" +"\n" +
                "Si lo deseas, puedes agregarlo a nuestra base de datos con el botón Añadir Hotel.");
            }
}

function darDeBajaHotel(){
    vName = document.getElementById("nombreHotel").value;
    let indice = buscar(vName);
    let posicion = indice;
    let currentHotel = "";

    if (indice >= 0) { //si encuentra el registro, te pide confirmación de si quieres eliminarlo o no.
        currentHotel= hotelesdb[posicion];

        let vConfirmación = confirm("IMPORTANTE: Esta es la información actualizada del hotel: " +vName+ "\n"
        +currentHotel.mostrarHotelJS()+ "\n"+currentHotel.calcularMantenimientoJS()+"\n"+
        " si haces click en ACEPTAR el registro será ELIMINADO." +"\n"+"Estas segur@ que quieres eliminarlo?");
    
        if (vConfirmación == true) {
            hotelesdb.splice([posicion], 1);
            alert("Haz hecho click en aceptar, el registro se ha eliminado con éxito. El hotel: " +vName+" ya no se encuentra en nuestra base de datos");
            
        } else {
            alert("Haz hecho click en Cancelar, el registro de " +vName+" no ha sido alterado.") 
        };
    }else { //indice < 0 (es decir el hotel no existe: -1)
        alert("Lo sentimos, este hotel no se encuentra entre nuestros registros.")
       
    }
};
