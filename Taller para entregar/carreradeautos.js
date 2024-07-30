class Auto {
    constructor(marca, modelo, velocidadMaxima, combustibleActual) {
        this.marca = marca;
        this.modelo = modelo;
        let _velocidadMaxima = velocidadMaxima;
        let _combustibleActual = combustibleActual;

        
        this.getVelocidadMaxima = function() {
            return _velocidadMaxima;
        }

        this.getCombustibleActual = function() {
            return _combustibleActual;
        }

        
        this.setCombustibleActual = function(combustible) {
            combustibleActual = combustible;
        }
    }

    acelerar(cantidad) {
        if (this.getCombustibleActual() > 0) {
            console.log("El auto acelera a "+cantidad+ "km/h");
            this.setCombustibleActual(this.getCombustibleActual() - cantidad);
            if (this.getCombustibleActual() < 0) {
                this.setCombustibleActual(0);
            }
        } else {
            console.log(" No hay suficiente combustible para acelerar ");
        }
    }

    frenar(cantidad) {
        console.log(" El auto frena a "+ cantidad +" km/h ");
       
    }

    recargarCombustible(cantidad) {
        this.setCombustibleActual(this.getCombustibleActual() + cantidad);
        console.log(" tanquéo " +cantidad+ " litros de combustible, Ahora tiene: " +this.getCombustibleActual()+" litros ");
    }

    mostrarEstado() {
        console.log("Marca: " +this.marca+ ", Modelo: "+this.modelo+", Velocidad Máxima: " +this.getVelocidadMaxima()+ " km/h, Combustible Actual: " +this.getCombustibleActual()+" litros ");
    }
}


let auto = new Auto("Toyota", "Corolla", 180, 50);
auto.acelerar(20);
auto.frenar(10);
auto.recargarCombustible(30);
auto.mostrarEstado();
