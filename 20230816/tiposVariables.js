function explicarVar() {
    var edad = 20;
    edad = 30;

    if (true) {
        var edad = 90;
        console.log(edad);
    }

    console.log(edad);
}

explicarVar()

function explicarLet() {
    let nota = 20;
    nota = 30;

    if (true) {
        let nota = 90;
        console.log(nota);
    }

    console.log(nota);
}

explicarLet()

function explicarConst() {
    const PI = 20;
    //PI = 30;
    const numeros = [1, 2, 3];
    
    console.log(typeof numeros)
    numeros.push(10)

    if (true) {
        const PI = 90;
        console.log(PI);
    }

    console.log(PI);
    console.log(numeros);
}

explicarConst()