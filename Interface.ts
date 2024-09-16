interface Programador {
    nombre:string,
    tecnologias: string[],
    tomarCafe: boolean | null
}

let dev: Programador = {
    nombre: 'Angel',
    tecnologias: ['JS', 'PHP'],
    tomarCafe: true
}

let dev2: Programador = {
    nombre: 'Luis',
    tecnologias: ['Linux', 'GO'],
    tomarCafe: null
}

function enviarCV(programador : Programador){
    console.log (`Este curriculum es de ${programador.nombre}`)
}

enviarCV(dev)