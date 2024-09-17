var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sortear = function () {
        return "Para ".concat(this.nombre, " el ticket es ").concat(this.ticket);
    };
    return Sorteo;
}());
var sorteo = new Sorteo('Karlangaxz');
sorteo.setTicket('a9');
console.log(sorteo.sortear());
