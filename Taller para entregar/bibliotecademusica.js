class BibliotecaM{
    #duracion
    constructor(titulo, artista, duracion){
        this.titulo = titulo
        this.artista = artista
        this.#duracion = duracion
        
    }
    get duracion(){
        return this.#duracion
    }
}
class Coleccion extends BibliotecaM{
    constructor(titulo,artista,duracion,coleccion){
        super(titulo,artista,duracion)
        this.coleccion = [];
    }
    agregarCancion(cancion){
        return this.coleccion.push(cancion)
    }
    eliminarCancion(titulo, coleccion,artista){
        for(let i = 0; i< this.coleccion.length; i++)
            if(this.titulo === titulo){
                this.coleccion === coleccion,
                this.artista === artista,
                this.coleccion.splice(i,1);
                break;
            }  
    }
    mostrarDetalles(){
        for(let i = 0; i< this.coleccion.length; i++){
            console.log("Titulo: " + this.coleccion[i].titulo+", Artista: " + this.coleccion[i].artista+", Duracion "+this.duracion)
        }
    }
}

let cancion1 = new BibliotecaM("normal", "ferxxo", "3:11");
let cancion2 = new BibliotecaM("Mirame", "Bless", "2:34");
let cancion3 = new BibliotecaM("ya no volveras", "Cris Valencia", "5:05");

let coleccion = new Coleccion("Amor bonito", "Antonio Aguilar", "2:30");
coleccion.agregarCancion(cancion1);
coleccion.agregarCancion(cancion2);
coleccion.agregarCancion(cancion3);
coleccion.mostrarDetalles();
coleccion.eliminarCancion("Mirame", "Bless", "2:34");


