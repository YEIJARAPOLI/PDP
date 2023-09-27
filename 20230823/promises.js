//Callback = Es una función que se le pasa como parametro a otra función
function response(res) {
    console.log(res);
}

function sumar(op1, op2, functionCallBack) {
    let resp = op1 + op2;

    functionCallBack(resp);
}

//sumar(10, 20, response);

//Promesas = Son un objeto, por naturaleza (defecto) son asincronas. La va a resolver o a rechazar
let promise = new Promise( (res, rej) => {
    let estado = true;

    if (estado) {
        res("Resolvio Promesa");
    } else {
        rej("Se Rechazo la Promesa");
    }
} );

//Opción 1
/*promise
    .then(valor => console.log(valor))
    .catch(error => console.log(error));*/

//Opción 2
/*promise.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

let promesa2 = new Promise(res => {
    //console.log("Inicio de Promesa2");

    setTimeout( () => {
        res("Resolvio Promesa2")
    }, 3000 )

    //console.log("Fin de Promesa 2");
});

//promesa2.then( (valor) => console.log(valor) );

//async = Indicarle a una función que regresa una promesa
//await = Esperar el resultado de una promesa --> si coloco await debe haber un async
async function funcionConAsync() {
    return "Ejemplo con async"
}

//funcionConAsync().then( x => console.log(x) );

async function funcionConAsyncAwait() {
    console.log("Inicio");

    let promise = new Promise( res => {
        setTimeout( () => {
            res("Resolvio Promesa")
        }, 3000 );
    } );

    console.log(await promise);

    console.log("Fin");
}

funcionConAsyncAwait();