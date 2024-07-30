class Libro {
    constructor(titulo, autor, disponible) {
        this.titulo = titulo;
        this.autor = autor;
        let _disponible = disponible;

       
        this.getDisponible = function() {
            return _disponible;
        }

       
        this.setDisponible = function(estado) {
            _disponible = estado;
        }
    }

    prestarLibro() {
        if (this.getDisponible()) {
            this.setDisponible(false);
            console.log("El libro "+this.titulo+" ha sido prestado ");
        } else {
            console.log("El libro "+this.titulo+" no está disponible");
        }
    }

    devolverLibro() {
        this.setDisponible(true);
        console.log("El libro "+this.titulo+" ha sido devuelto y ahora está disponible ");
    }

    mostrarEstado() {
        const estado = this.getDisponible() ? "disponible" : "no disponible";
        console.log("Título: "+this.titulo+" Autor: "+this.autor+" Estado: "+estado  );
    }
}


class LibroDigital extends Libro {
    constructor(titulo, autor, disponible, formato) {
        super(titulo, autor, disponible);
        this.formato = formato;
    }

    
    mostrarEstado() {
        const estado = this.getDisponible() ? "disponible" : "no disponible";
        console.log("Título: "+this.titulo+" Autor: "+this.autor+" Estado: "+estado+" Formato: "+this.formato);
    }
}


let libroFisico = new Libro("Cien años de soledad", "Gabriel García Márquez", true);
libroFisico.prestarLibro();
libroFisico.mostrarEstado();
libroFisico.devolverLibro();
libroFisico.mostrarEstado();

let libroDigital = new LibroDigital("1984", "George Orwell", true, "PDF");
libroDigital.prestarLibro();
libroDigital.mostrarEstado();
libroDigital.devolverLibro();
libroDigital.mostrarEstado();
