let equipos = ["Medellín", "Nacional"];

for (let i = 0; i < equipos.length; i++) {
    console.log(equipos[i]);
}

equipos.forEach( (equipo) => {
    console.log(equipo);
} );

// Push - pop - shift --> Son mutables

equipos.push("Envigado");
console.log(equipos); //Agrega un valor al final

equipos.pop();
console.log(equipos); //Elimina el ultimo valor

equipos.shift()
console.log(equipos); //Elimina el primer valor

//Inmutables --> Map - filter - reduce - some - every

//Extraer información
let alumnos = ["Ana", "Juan", "Pedro"];

alumnos.map( (alumno) => {
    console.log(alumno)
} );

//
let productos = [
    {
        name: "Libro",
        cost: 10
    },
    {
        name: "Cuaderno",
        cost: 5
    },
    {
        name: "Borrador",
        cost: 1
    }
];

let nombreProductos = productos.map( (producto) => producto.name )
console.log(nombreProductos);

let productosIVA = productos.map( (producto) => {
    return {
        ...producto, iva: 19
    }
} );
console.log(productosIVA);

let FPC = [
    { name: "Nacional", city: "Medellín", ligas: 17, libertadores: 2 },
    { name: "Medellín", city: "Medellín", ligas: 10, libertadores: 0 },
    { name: "America", city: "Calí", ligas: 15, libertadores: 0 },
    { name: "Calí", city: "Calí", ligas: 11, libertadores: 0 },
    { name: "Onde Caldas", city: "Manizales", ligas: 9, libertadores: 1 },
    { name: "Pasto", city: "Pasto", ligas: 3, libertadores: 0 }
];

//Every --> Cada iteración se cumpla (true, false)
let todosTieneLigas = FPC.every( (equipo) => equipo.ligas > 0 );
console.log(todosTieneLigas);

//Some --> Alguno cumpla (true, false)
let algunoTieneLibertadores = FPC.some( (equipo) => equipo.libertadores > 0 );
console.log(algunoTieneLibertadores);

//Filter --> Concatenar condiciones al predicado
let gananLibertadores = FPC.filter( (equipo) => equipo.libertadores > 0 ).map( (equipo) => equipo.name );
console.log(gananLibertadores);

let gananLibertadoresCiudad = FPC
    .filter( (equipo) => equipo.libertadores > 0 && equipo.city === "Medellín" )
    .map( (equipo) => equipo.name );
console.log(gananLibertadoresCiudad);

//Reduce --> Sirve como contador / acumulador --> estructura = reduce((x, y) => {})
let totalLibertadores = FPC
    .filter( (equipo) => equipo.libertadores > 0 )
    .reduce( (contador, equipo) => (contador += equipo.libertadores), 0 );
console.log(totalLibertadores);

let totalTitulos = FPC.reduce( (res, equipo) => {
    return {
        ligas: res.ligas += equipo.ligas,
        libertadores: res.libertadores += equipo.libertadores
    }
}, {ligas: 0, libertadores: 0} );
console.log(totalTitulos);