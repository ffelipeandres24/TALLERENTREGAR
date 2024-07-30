class CuentaBancaria {
    constructor(nombreTitular, saldo, tipoCuenta) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        let _tipoCuenta = tipoCuenta;

       
        this.getTipoCuenta = function() {
            return _tipoCuenta;
        }
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log("Se han depositado $"+cantidad+", El nuevo saldo es $"+this.saldo);
        } else {
            console.log("La cantidad a depositar debe ser mayor a 0 ");
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log("Se han retirado $"+cantidad+", El nuevo saldo es $"+this.saldo);
        } else if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor a 0.");
        } else {
            console.log("Fondos insuficientes ");
        }
    }

    consultarSaldo() {
        console.log("El saldo actual es $ "+this.saldo);
        return this.saldo;
    }

    mostrarInformación() {
        console.log("Titular: $ "+this.nombreTitular+" Saldo: $ "+this.saldo+" Tipo de Cuenta: "+this.getTipoCuenta());
    }
}

// Ejemplo de uso
let cuenta = new CuentaBancaria("Juan Perez", 2000, "Ahorros");
cuenta.depositar(500);
cuenta.retirar(200);
cuenta.consultarSaldo();
cuenta.mostrarInformación();
