class Empleado {
    constructor(nombre, apellido, cargo, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        let _salario = salario;

       
        this.getSalario = function() {
            return _salario;
        }

        
        this.setSalario = function(salario) {
            _salario = salario;
        }
    }

    calcularSueldoNeto() {
        const deducciones = 0.15;
        const sueldoNeto = this.getSalario() * (1 - deducciones);
        return sueldoNeto;
    }

    mostrarDatos() {
        console.log("Nombre: "+this.nombre+ " " +this.apellido+", Cargo: "+this.cargo+", Salario: $"+this.getSalario()+", Sueldo Neto: $"+this.calcularSueldoNeto());
    }
}


let empleado = new Empleado("Juan", "Pérez", "Desarrollador", 3000);
empleado.mostrarDatos();
