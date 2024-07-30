class Proyecto {
    constructor(nombreProyecto, fechaInicio, fechaFin) {
        this.nombreProyecto = nombreProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        let _estado = "pendiente";

        
        this._getEstado = function() {
            return _estado;
        }

        
        this._setEstado = function(estado) {
            _estado = estado;
        }
    }

    iniciarProyecto() {
        this._setEstado("en progreso");
        console.log("El proyecto "+this.nombreProyecto+" ha sido iniciado");
    }

    finalizarProyecto() {
        this._setEstado("completado");
        console.log("El proyecto "+this.nombreProyecto+" ha sido completado");
    }

    mostrarEstado() {
        console.log("Proyecto: "+this.nombreProyecto+", Estado: "+this._getEstado());
    }
}

// instancias
let proyecto1 = new Proyecto("Desarrollo Web", "2024-08-01", "2024-12-01");
proyecto1.mostrarEstado();
proyecto1.iniciarProyecto();
proyecto1.mostrarEstado();
proyecto1.finalizarProyecto();
proyecto1.mostrarEstado();

let proyecto2 = new Proyecto("Aplicación Móvil", "2024-09-01", "2024-11-30");
proyecto2.mostrarEstado();
proyecto2.iniciarProyecto();
proyecto2.mostrarEstado();
 