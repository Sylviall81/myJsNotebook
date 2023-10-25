class Hospital extends Edificio {
    constructor(nombre, numPlantas, superficie, numPacientes) {
        super(nombre, numPlantas, superficie);
        this.numPacientes = parseInt(numPacientes);
    }


    //getter
    getNumPacientes() {
        return this.numPacientes;
    }

    //setter
    setNumPacientes(numPacientes) {
        this.numPacientes = numPacientes;
    }


    repartirAlmuerzo(numPacientes) {
        let almuerzosDiarios = parseInt(numPacientes * 3)
        let mostrar = "";

        mostrar = "se reparten " + almuerzosDiarios + " raciones diarias de alimentos";
        return mostrar
    }

    calculoCosteVigilancia() {
        let numVigilantes, costeMes
        numVigilantes = Math.ceil(this.superficie / 1000);
        costeMes = (numVigilantes * 1300)
        return costeMes
    }


    toString() {
        let mostrar = "";
        mostrar += super.toString() + "</br>"
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" + "</br>"
        mostrar += "Los gastos de seguridad y vigilancia del edificio ascienden a: " + this.calculoCosteVigilancia() + " € al mes" + "</br>"
        mostrar += "</br>DATOS OPERATIVOS de " + (this.nombre).toUpperCase() + "</br>"
        mostrar += "Esta institución sanitaria tiene capacidad para: " + "</br>";
        mostrar += "No. de Pacientes: " + this.numPacientes + "</br>";
        mostrar += "entre los que " + this.repartirAlmuerzo(this.numPacientes) + "</br>";
        mostrar += "</br>"

        mostrar += super.limpiar();

        return mostrar;

    }

    mostrarJS() {
        let mostrar = "";
        mostrar += super.toJS();
        mostrar += "DATOS OPERATIVOS de " + (this.nombre).toUpperCase() + "\n"
        mostrar += "Esta institución sanitaria tiene capacidad para: " + "\n";
        mostrar += "No. de Pacientes: " + this.numPacientes + "\n";
        mostrar += "entre los que " + this.repartirAlmuerzo(this.numPacientes) + "\n";
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" + "\n";
        mostrar += "Los gastos de seguridad y vigilancia del edificio ascienden a: " + this.calculoCosteVigilancia() + " € al mes" + "\n";

        return mostrar;

    }

} //cierre clase hospital