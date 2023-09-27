const nombre = "Luis";
const equipo = "Liverpool";
const edad = 24;

//ES5
const jugador = { nombre: nombre, equipo: equipo, edad: edad };

console.log(jugador);

//ES6+
const jugador2 = { nombre, equipo, edad };

console.log(jugador2);