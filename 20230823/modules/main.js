//Exportación x default
import Animal from "./Animal.js";
import validarToken from "./helper.js";

const prueba = new Animal("León");
prueba.print();

console.log(validarToken());

//Export nombrados
import { API_KEY, PERFILES } from "./helper.js";
//import * as helper from "./helper.js";

console.log(API_KEY);
console.log(PERFILES[0]);
//console.log(helper.API_KEY);
//console.log(helper.PERFILES[0]);