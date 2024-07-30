class ReservaHotel {
    constructor(nombreCliente, fechaReserva) {
        this.nombreCliente = nombreCliente;
        this.fechaReserva = fechaReserva;
        let _habitacionAsignada = null;

        
        this._getHabitacionAsignada = function() {
            return _habitacionAsignada;
        }

        
        this._setHabitacionAsignada = function(habitacion) {
            _habitacionAsignada = habitacion;
        }
    }

    reservarHabitacion(habitacionesDisponibles) {
        if (habitacionesDisponibles.length > 0) {
            const habitacion = habitacionesDisponibles.pop();
            this._setHabitacionAsignada(habitacion);
            console.log(`Habitación ${habitacion} ha sido asignada a ${this.nombreCliente}.`);
        } else {
            console.log("No hay habitaciones disponibles.");
        }
    }

    cancelarReserva() {
        if (this._getHabitacionAsignada() !== null) {
            const habitacion = this._getHabitacionAsignada();
            this._setHabitacionAsignada(null);
            console.log(`La reserva de la habitación ${habitacion} ha sido cancelada para ${this.nombreCliente}.`);
        } else {
            console.log("No hay ninguna reserva para cancelar.");
        }
    }

    mostrarReserva() {
        const habitacion = this._getHabitacionAsignada();
        if (habitacion !== null) {
            console.log(" Cliente: "+this.nombreCliente+", Fecha de Reserva: "+this.fechaReserva+", Habitación Asignada: "+habitacion);
        } else {
            console.log(" Cliente: "+this.nombreCliente+", Fecha de Reserva: "+this.fechaReserva+", No hay habitación asignada");
        }
    }
}

//instancias
let habitacionesDisponibles = [101, 102, 103, 104];

let reserva1 = new ReservaHotel("Ana García", "2024-07-28");
reserva1.reservarHabitacion(habitacionesDisponibles);
reserva1.mostrarReserva();

let reserva2 = new ReservaHotel("Carlos Pérez", "2024-07-29");
reserva2.reservarHabitacion(habitacionesDisponibles);
reserva2.mostrarReserva();

reserva1.cancelarReserva();
reserva1.mostrarReserva();

reserva2.mostrarReserva();
