////////////////////////////// 
//  5
//  Queremos saber cuanto suman todos los items del array arr
//  Crea un variable llamada total que sea de tipo number,
//  donde almacenar cuanto suman todos los items de array arr.
//  En cada ejecución arr será distinto pero sus item siempre serán tipo 'number'
//  ejemplo: arr = [1,3,4] ;  total = 8
//  de tal modo que el siguiente código no muestre por consola 'suspendes'

//  PISTA: utilizad un bucle for of

let giveMeIntegerRandom = max => Math.round(Math.random() * max) + 1;
let arr = [];
for (let i = 0; i < giveMeIntegerRandom(10); i++) {
    arr[i] = giveMeIntegerRandom(4)
}
console.log('El array original es:  arr =', arr);

// Aquí tu código


// Hasta aquí
console.log('El total nuevo es: ', total);

// TEST 1
if (typeof total === 'number') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 2
if (total >= arr.length) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 3
if (arr.reduce((i, t) => i + t) === total) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}