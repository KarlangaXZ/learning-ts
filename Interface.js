var dev = {
    nombre: 'Angel',
    tecnologias: ['JS', 'PHP'],
    tomarCafe: true
};
var dev2 = {
    nombre: 'Luis',
    tecnologias: ['Linux', 'GO'],
    tomarCafe: null
};
function enviarCV(programador) {
    console.log("Este curriculum es de ".concat(programador.nombre));
}
enviarCV(dev);
