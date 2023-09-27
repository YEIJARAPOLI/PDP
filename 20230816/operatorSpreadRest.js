/**
 * Rest
 */

function calcularSaldo(...valores) { //Para recibir un conjunto de datos
    let total = 0;

    valores.forEach((valor) => total += valor)

    return total;
}

console.log(calcularSaldo(10, 20, 30, 40, 50))

/**
 * Spread
 */

const saldoInicial = 10;
const saldos = [10, 20, 30, 40];
const saldoTotal = [saldoInicial, ...saldos]

console.log(saldoTotal);
console.log(calcularSaldo(...saldoTotal));