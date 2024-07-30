class Producto {
    constructor(codigoProducto, nombreProducto, cantidadEnStock) {
        this.codigoProducto = codigoProducto;
        this.nombreProducto = nombreProducto;
        let _cantidadEnStock = cantidadEnStock;

       
        this.getCantidadEnStock = function() {
            return _cantidadEnStock;
        }

        
        this.setCantidadEnStock = function(cantidad) {
            _cantidadEnStock = cantidad;
        }
    }

    agregarProducto(cantidad) {
        if (cantidad > 0) {
            this.setCantidadEnStock(this.getCantidadEnStock() + cantidad);
            console.log("Se han agregado "+cantidad+" unidades del producto "+this.nombreProducto);
        } else {
            console.log("La cantidad a agregar debe ser mayor a 0 ");
        }
    }

    retirarProducto(cantidad) {
        if (cantidad > 0 && this.getCantidadEnStock() >= cantidad) {
            this.setCantidadEnStock(this.getCantidadEnStock() - cantidad);
            console.log("Se han retirado "+cantidad+" unidades del producto "+this.nombreProducto);
        } else if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor a 0 ");
        } else {
            console.log("Stock insuficiente para retirar "+cantidad+" unidades del producto "+this.nombreProducto);
        }
    }

    mostrarStock() {
        console.log("Producto: "+this.nombreProducto+", Código: "+this.codigoProducto+", Stock: "+this.getCantidadEnStock()+" unidades.");
    }
}


let producto = new Producto("001", "Tesla", 10);
producto.agregarProducto(5);
producto.retirarProducto(3);
producto.mostrarStock();
producto.retirarProducto(20);
producto.mostrarStock();
