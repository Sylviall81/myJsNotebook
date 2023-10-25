class Cine extends Edificio {
    constructor(nombre, numPlantas, superficie, maxAforo) {
        super(nombre, numPlantas, superficie);
        this.maxAforo = parseInt(maxAforo);
    }

    //getters

    getMaxAforo() {
        return this.maxAforo;
    }


    //Setters 

    setMaxAforo(maxAforo) {
        this.maxAforo = maxAforo;
    };

    //metodos especificos Coste Vigilancia y proyectar sesión

    calculoCosteVigilancia() {
        let numVigilantes, costeMes;

        numVigilantes = Math.ceil(this.superficie / 3000);
        console.log(numVigilantes)
        costeMes = (numVigilantes * 1300);
        return costeMes.toFixed(2)
    }

    proyectarSesion(precio, asistentes) {
       
            let recaudacion = parseFloat(precio * asistentes);

            let mensaje = "En una sesión con : " + asistentes + " espectadores y un cobro de " + precio +" €, por Ticket " + "</br>"; 
            mensaje += "Se han recaudado " + recaudacion.toFixed(2) + " € ";
            mensaje += super.limpiar();
            return mensaje;
    };


    toString() {
        let mostrar = "";
        mostrar += super.toString();
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" + "</br>"
        mostrar += "Los gastos de seguridad y vigilancia del edificio ascienden a: " + this.calculoCosteVigilancia() + " € al mes" + "</br>"
        return mostrar;
    }

    mostrarJS() {
        let mostrar = "";
        mostrar += super.toJS();
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" + "\n"
        mostrar += this.calculoCosteVigilancia()
        return mostrar;
    }

} //cierre clase cine(extension de edif)