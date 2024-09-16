var Pelicula = /** @class */ (function () {
    function Pelicula(nombre, protagonistas, actores) {
        this.nombre = 'El SAmaurai';
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
    Pelicula.prototype.proyectarEnCines = function () {
        console.log("la Pelicula ".concat(this.nombre, " esta siendo proyectada"));
    };
    return Pelicula;
}());
var pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margaret', 'Ryan']);
var pelicula2 = new Pelicula('OppenHAimer', ['OppenHaimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey']);
console.log(pelicula2);
