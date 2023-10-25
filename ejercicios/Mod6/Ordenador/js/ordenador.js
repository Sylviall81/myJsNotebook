class Ordenador {
    constructor(marca, modelo, procesador, memoriaRAM, discoDuro) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.memoriaRAM = memoriaRAM;
        this.discoDuro = discoDuro;

    }

    //getters: Métodos que permitan consultar cada uno de los atributos (getters).</li>

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getProcesador() {
        return this.procesador;
    }
    getMemoriaRam() {
        return this.memoriaRAM;

    }

    getDiscoDuro() {
        return this.discoDuro;
    }

    //setters: Métodos que permitan modificar el procesador, la cantidad de memoria ramo y la capacidad del disco duro. (setters).</li>

    //modificar procesador, memoria RAM y capacidad de Disco Duro

    setProcesador(procesador) {
        this.procesador = procesador;
    };

    setMemoriaRAM(memoriaRAM) {
        this.memoriaRAM = memoriaRAM;
    }

    setDiscoDuro(discoDuro) {
        this.discoDuro = discoDuro;
    }

    //Metodo ejecutando programa

    toExecute(programa) {
        alert("En estos momentos "+this.modelo+ " esta ejecutando: " + programa);
    }


    // Un método que devolverá una descripción completa del ordenador (toString()).</li>

    mostrarJS() {
        let mostrar = "DATOS DEL ORDENADOR\n";
        mostrar += "La marca del ordenador es: " + this.marca + "\n";
        mostrar += " modelo: " + this.modelo + "\n";
        mostrar += " tiene un procesador:  " + this.procesador + "\n";
        mostrar += "y una memoria RAM: " + this.memoriaRAM + "\n";
        mostrar += "La capacidad de su disco duro es de: " + this.discoDuro;
        return mostrar;
     }
   

    toString() {
        let mostrar = "DATOS DEL ORDENADOR"+"</br>";
        mostrar += "La marca del ordenador es " + this.marca + "</br>"
        mostrar += "modelo:  " + this.modelo + "</br>"
        mostrar += " tiene un procesador:  " + this.procesador + "</br>"
        mostrar += " y una memoria RAM de: " + this.memoriaRAM + "</br>"
        mostrar += "La capacidad de su disco duro es de: " + this.discoDuro;
        return mostrar
    }
}