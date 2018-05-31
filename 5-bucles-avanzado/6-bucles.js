////////////////////////////// 
//  6
//  Crea un array nuevo llamado dobleArr
//  cada item ha de ser el doble de cada item del array llamado arr
//  ejemplo:  arr = [1,2]  ;   dobleArr = [2,4];
//  En cada ejecución arr será distinto pero sus item siempre serán tipo 'number' 
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
console.log('El array nuevo es:  doubleArr =', dobleArr);
// TEST 1
if (typeof dobleArr === 'object' && dobleArr.length >= 0) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 2
if ( dobleArr[0] === arr[0] * 2 || typeof arr[0] === 'undefined') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 3
if (  dobleArr[arr.length - 1] === arr[arr.length - 1] * 2 || typeof arr[arr.length - 1] === 'undefined') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}