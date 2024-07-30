class AgendaC{
    constructor(nombre, apellido, teléfono, correo_electrónico){
        this.nombre=nombre;
        this.apellido = apellido;
        this.teléfono = teléfono;
        this.correo_electrónico = correo_electrónico;

    }
   
}
class listaC{
    constructor(){
        this.listac = [];
    }
    agreagarcontactos(contacto){
        this.listac.push(contacto);
    }
    editarcontacto(nombre, nuevonombre,apellido,nuevotelefono,nuevocorreo){
        for(let i = 0; i < this.listac.length; i++){
            if(this.listac[i].nombre === nombre){
                this.listac[i].nombre =nuevonombre
                this.listac[i].apellido =apellido
                this.listac[i].teléfono=nuevotelefono
                this.listac[i].correo_electrónico =nuevocorreo
                break;
            }
        }
    }
    eliminarcontacto(nombre){
        for(let i = 0; i < this.listac.length; i++)
            if(this.listac[i].nombre === this.nombre){
                this.listac[i].splice(i, 1);
                break;
                }
        
    }
    mostrarcontactos(){
        for(let i = 0; i < this.listac.length; i++){
            console.log(" Contactos: "+ this.listac[i].nombre + this.listac[i].apellido
                +" con numero de telefono "+this.listac[i].teléfono+" y con correo electronico: "+this.listac[i].correo_electrónico);
        }
    }
}

//crear las instancias para cada metodo
let list = new listaC();
let Agenda1 = new AgendaC(" Juan ", " Perez ", " 123456789 ", " j@gmail.com ");
let Agenda2 = new AgendaC(" Maria ", " Gomez ", " 987654321 ", " m@gmail.com ");
let Agenda3 = new AgendaC(" Pedro ", " Lopez ", " 456789123 "," p@gmail.com ");

list.agreagarcontactos(Agenda1)
list.agreagarcontactos(Agenda2)
list.agreagarcontactos(Agenda3)
list.mostrarcontactos();
list.editarcontacto("Juan", "Andres", "Rivera", 1061715793, "rivera@gmail.com");
list.mostrarcontactos();

