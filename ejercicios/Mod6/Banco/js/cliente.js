class Cliente {
   
    constructor(idnumber, nombre, apellido) {
        this.idnumber = idnumber;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuentas = []
    }

    //Metodos: GETTERS

    getIdNumber() {
        return this.idnumber;
    }
    getNombre() {
        return this.nombre;
    };

    getApellido() {
        return this.apellido;
    };

    /*
    getCuenta() {
        return this.cuenta;
    };*/

    //SETTERS

    setIdNumber(idnumber) {
        this.idnumber = idnumber;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    };

    setApellido(apellido) {
        this.apellido = apellido;
    }
    /*
        setCuentas(cuentas) {
            this.cuentas = cuentas;
        }
        */

    mostrarClienteJS() { //Alert
        let mostrar = "DATOS DEL CLIENTE\n";
        mostrar += "Num. de Identificación : " + this.idnumber + "\n";
        mostrar += "Nombre: " + this.nombre + "\n";
        mostrar += "Apellido:  " + this.apellido + "\n";
        //mostrar += " Cuentas activas del cliente: " + this.cuentas + "</br>";
        //mostrar += "Cuentas: " + this.cuenta
        return mostrar;
    }

    toString() { //HTML
        let mostrar = "DATOS DEL CLIENTE" + "</br>";
        mostrar += "<br>";
        mostrar += "Num. de identificación : " + this.idnumber + "</br>"
        mostrar += " Nombre: " + this.nombre + "</br>"
        mostrar += " Apellido:  " + this.apellido + "</br>"
       // mostrar += " Cuentas activas del cliente: " + this.cuentas + "</br>";
              return mostrar
    };

}