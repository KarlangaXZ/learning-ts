class Pelicula{
    nombre: string = 'El SAmaurai';
    protagonistas: string[];
    actores: string[];

    proyectarEnCines(){
        console.log(`la Pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }

}

const pelicula = new Pelicula('Barbie',['Barbie','Ken'],['Margaret', 'Ryan'])
const pelicula2 = new Pelicula('OppenHAimer',['OppenHaimer','Strauss'],['Cillian Murphy', 'Robert Downey'])

console.log(pelicula2)

