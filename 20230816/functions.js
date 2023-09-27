/**
 * Function Declarative (Nombradas)
 * valor --> Parametro
 * 100 --> Argumento
 */

function calcular(valor = 10) {
    return valor * 1000;
}

console.log(calcular());
console.log(calcular(100));

/**
 * Function Expression (Anonimas)
 */

const sumar = function (valor = 10) {
    return valor * 1000;
}

console.log(sumar());
console.log(sumar(1000));