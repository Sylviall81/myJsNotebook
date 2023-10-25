class Cuenta {

    constructor(numCuenta) {
        this.numCuenta = numCuenta;
        this.saldo = (Number.parseFloat(0));
    }

    //Metodos: GETTERS

    getNumCuenta(){
        return this.numCuenta;
    }
    getSaldo() {
        return this.saldo;
    };


    //SETTERS en este caso no hay setters xq el saldo y el num de cuenta solo pueden modificarse a traves de los métodos.

    agregarCuenta(objCuenta) {
        this.cuentas.push(objCuenta);
    }
    //Metodos Ingresar y Retirar

    ingresarDinero(importe) {
        this.saldo += importe;
    }

    retirarDinero(importe) {
        this.saldo -= importe;
    }

    agregarCuenta(objCuenta) {
        this.cuentas.push(objCuenta);
    }

    //Ingresar o sacar dinero

    ingresarDinero(money) {
        this.saldo += money;
    };

    retirarDinero(money) {
        this.saldo -= money;
    };

    mostrarCuentaJS() { //alert
        let mostrar = "DATOS DE CUENTA\n";
        mostrar += "\n";
        mostrar += "El Num. de Cuenta solicitado es: " + this.numCuenta + "\n";
        mostrar += " y su saldo actual es: " + this.saldo + "€";
        return mostrar;
    }

    toString() { //HTML
        let mostrar = "DATOS DE CUENTA" + "<br>";
        mostrar += "<br>";
        mostrar += "El Num. de Cuenta es: " + this.numCuenta + "<br>";
        mostrar += " y el saldo actual es: " + this.saldo + "€";
        return mostrar
    };

}