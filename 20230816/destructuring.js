/**
 * Object extraer propiedades
 */

const jugador = { name: "Luis", age: 24, position: "Delantero" }

//ES5
const nombre = jugador.name;
const edad = jugador.edad;

//ES6+
const { name, age } = jugador;

console.log(name);

/**
 * Array extraer elementos
 */

const jugadores = ["Messi", "Luis", "Ronaldo"];

//ES5
const messi = jugadores[0]

//ES6+
const [x, luis] = jugadores;
const [x2, , y] = jugadores;

console.log(x);
console.log(luis);
console.log(y);

let a = 10;
let b = 20;

[b, a] = [a, b]

console.log(a);
console.log(b);