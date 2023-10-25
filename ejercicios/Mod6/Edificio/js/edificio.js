class Edificio {
    constructor(nombre, numPlantas, superficie) {
        this.nombre = nombre;
        this.numPlantas = parseInt(numPlantas);
        this.superficie = parseFloat(superficie);
           }
    //No tiene setters pero si getters
    getNombre() {
        return this.nombre
    };

    getNumPlantas() {
        return this.numPlantas
    }

    getSuperficie() {
        return this.superficie
    }

    metodoClean() {
        let cleanTime = ((this.superficie / 5) + ((this.numPlantas -1) * 0.5))/60;
        let cleanPaymentDaily = cleanTime
        let cleanPaymentMonthly = cleanPaymentDaily * 30
        let mensaje = "";

        mensaje += "La limpieza de este edificio toma: " + cleanTime.toFixed(2) + " hrs. al día" + "</br>";
        mensaje += " y el coste mensual de este servicio es de: " + cleanPaymentMonthly.toFixed(2)+ "€" + "</br>"

        return mensaje
    }

    metodoCleanJS() {
        let cleanTime = ((this.superficie / 5) + ((this.numPlantas-1) * 0.5))/60;
        let cleanPaymentDaily = cleanTime
        let cleanPaymentMonthly = cleanPaymentDaily * 30
        let mensaje = "";

        mensaje += "La limpieza de este edificio toma: " + cleanTime.toFixed(2) + " hrs. al día" + "\n";
        mensaje += " y el coste mensual de este servicio es de: " + cleanPaymentMonthly.toFixed(2) + "€" + "\n"

        return mensaje
    }

    limpiar() {
        return "<hr><p><button onclick='limpiarPantalla()'>Limpiar Datos</button></p>";
    }

    toJS() {
        let mostrar = "";
        mostrar += "DATOS DEL EDIFICIO \n";
        mostrar += "Nombre: " + this.nombre + "\n";
        mostrar += "Número de plantas: " + this.numPlantas + "\n";
        mostrar += "Superficie: " + this.superficie + "mts2 \n";
        mostrar +=  "DATOS DE LIMPIEZA \n"     
        mostrar += this.metodoCleanJS() + "\n";
        return mostrar;
    }

    toString() {
        let mostrar = "";
        mostrar += "DATOS DEL EDIFICIO" + "</br>"
        mostrar += "Nombre: " + this.nombre + "</br>";
        mostrar += "Número de plantas: " + this.numPlantas + "</br>"
        mostrar += "Superficie: " + this.superficie + "mts2"+"</br>"
        mostrar +=  "</br>"  
        mostrar +=  "DATOS DE LIMPIEZA" + "</br>"     
        mostrar += this.metodoClean() + "</br>" 
     
        return mostrar;

    }


}//Cierre de clase edificio