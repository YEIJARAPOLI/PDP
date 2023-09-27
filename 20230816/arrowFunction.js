const saludar = function (nombre) {
    return `Hola ${nombre} como estas?`;
}

console.log(saludar("Yeison"));

const flecha = (nombre) => {
    return `Hola ${nombre} como estas?`
}

console.log(flecha("Alexander"));

const flechaImpl = (nombre) => `Hola ${nombre} como estas?`;

console.log(flechaImpl("Gil"));