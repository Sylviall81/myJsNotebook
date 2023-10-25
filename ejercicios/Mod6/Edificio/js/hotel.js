class Hotel extends Edificio {

    constructor(nombre, numPlantas, superficie, habitaciones) {
        super(nombre, numPlantas, superficie)
        this.habitaciones = habitaciones;

    }

    //Metodos: GETTERS

    getHabitaciones() {
        return this.habitaciones;;
    }

    //Setters
    setHabitaciones(habitaciones) {
        this.habitaciones = habitaciones;
    }

    //Metodos especificos; coste vigilancia, Mantenimiento RoomService y to strong y showJS

    calculoCosteVigilancia() {
        let numVigilantes, costeMes, plusPeligro, costeTotal;

        numVigilantes = Math.ceil(this.superficie / 1000);
        console.log (numVigilantes)
        costeMes = (numVigilantes * 1300);
        plusPeligro = 500;
        costeTotal = costeMes + plusPeligro;
        return costeTotal.toFixed(2)
    }

 //Metodo EXTRA:
 calcularMantenimiento() { //HTML
    let numEmpleados = (Math.ceil(this.habitaciones / 20));
    let costeMantenimiento = (numEmpleados * 1000);

    let mensaje = "Para realizar el servicio de habitaciones diario este hotel necesita de " + numEmpleados + " empleados " + "</br>"
    mensaje += " esto supone un coste  de: " + costeMantenimiento + " € al mes. </br>"
    return mensaje
};


calcularMantenimientoJS() { //Alert
    let numEmpleados = (Math.ceil(this.habitaciones / 20));
    let costeMantenimiento = (numEmpleados * 1500);

    let mostrar = "Este hotel requiere de " + numEmpleados + " empleados para su mantenimiento.\n"
    mostrar += " esto supone un coste  de: " + costeMantenimiento + " € al mes.\n"
    return mostrar
};

    mostrarHotelJS() { //Alert
        let mostrar = "";
        mostrar += super.toString();
        mostrar += "DATOS OPERATIVOS de "+(this.nombre).toUpperCase()+"\n";
        mostrar += " No. de habitaciones: " + this.habitaciones + "\n";
        mostrar += "DATOS DE LIMPIEZA Y MANTINIMIENTO" + "\n"
        mostrar += this.calcularMantenimientoJS()+"\n"
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" +"</br>"
        mostrar += "Los gastos de seguridad y vigilancia del edificio ascienden a: " + this.calculoCosteVigilancia() + " € al mes" + "\n"
        return mostrar;
    }

    toString() { //HTML
        let mostrar = "";
        mostrar += super.toString();
        mostrar += "DATOS DE SEGURIDAD Y VIGILANCIA" +"</br>"
        mostrar += "Los gastos de seguridad y vigilancia del edificio ascienden a: " + this.calculoCosteVigilancia() + " € al mes" + "</br>"
        mostrar += "</br> DATOS OPERATIVOS de "+(this.nombre).toUpperCase()+"</br>"
        mostrar += " No. de habitaciones: " + this.habitaciones + "</br>"
        mostrar +=  "</br>"
        mostrar += "DATOS DE ROOM SERVICE" + "</br>"
        mostrar += this.calcularMantenimiento();
        mostrar +=  "</br>"
       
        mostrar += super.limpiar();
        return mostrar;
        
    };

}// cierre clase hotel

   