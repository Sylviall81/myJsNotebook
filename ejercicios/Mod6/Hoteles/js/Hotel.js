class Hotel {
    // Atributos: nombre, número de habitaciones, número de plantas y superficie total del hotel.
    constructor(nombre, habitaciones, plantas, superficie) {
        this.nombre = nombre;
        this.habitaciones = habitaciones;
        this.plantas = plantas;
        this.superficie = superficie;
    }

    //Metodos: GETTERS

    getNombre() {
        return this.nombre;
    };

    getHabitaciones() {
        return this.habitaciones;;
    }

    getPlantas() {
        return this.plantas;
    };

    getSuperficie() {
        return this.superficie;
    };

    //SETTERS

    setNombre(nombre) {
        this.nombre = nombre;
    };

    setHabitaciones(habitaciones) {
        this.habitaciones = habitaciones;
    }

    setPlantas(plantas) {
        this.plantas = plantas;
    }

    setSuperficie(superficie) {
        this.superficie = superficie;
    }

    mostrarHotelJS() { //Alert
        let mostrar = "DATOS DEL HOTEL\n";
        mostrar += "El nombre del hotel es : " + this.nombre + "\n";
        mostrar += "No. de habitaciones: " + this.habitaciones + "\n";
        mostrar += "No. plantas:  " + this.plantas + "\n";
        mostrar += "Superficie total de: " + this.superficie
        return mostrar;
    }

    toString() { //HTML
        let mostrar = "DATOS DEL HOTEL" + "</br>";
        mostrar += "El nombre del hotel es : " + this.nombre + "</br>"
        mostrar += " No. de habitaciones: " + this.habitaciones + "</br>"
        mostrar += " No. de plantas:  " + this.plantas + "</br>"
        mostrar += " Superficie total de: " + this.superficie
        return mostrar
    };


    //Metodo EXTRA:
    calcularMantenimiento() {//HTML
        let numEmpleados = (Math.ceil(this.habitaciones / 20));
        let costeMantenimiento = (numEmpleados * 1500);

        let mostrar = "Información de Mantenimiento: "+ "</br>"+
        "Este hotel requiere de " + numEmpleados + " empleados para su mantenimiento." + "</br>"
        mostrar += " esto supone un coste  de: " + costeMantenimiento + " € al mes."
        return mostrar
    };

    calcularMantenimientoJS() {//Alert
        let numEmpleados = (Math.ceil(this.habitaciones / 20));
        let costeMantenimiento = (numEmpleados*1500);

        let mostrar = "Información de Mantenimiento: "+ "\n"+
        "Este hotel requiere de " + numEmpleados + " empleados para su mantenimiento.\n"
        mostrar += " esto supone un coste  de: " + costeMantenimiento + " € al mes."
        return mostrar
    };

}