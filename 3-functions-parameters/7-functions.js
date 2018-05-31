////////////////////////////// 
//  7
//  Crea una función llamada convierteEurosEnPesetas
//  de modo que al ser ejecutada con un 1 en su primer argumento
//  debe devolver 168 ( 1 euro son 168 pesetas;  2 euros son 336)
//  ejemplo:  
//  convierteEurosEnPesetas(1) === 168 // true

// Aquí tu código


// Hasta aquí


// TEST 1
if (typeof convierteEurosEnPesetas === 'function' ) {
    console.log('apruebas:  convierteEurosEnPesetas es una función');
} else {
    console.log('suspendes:  convierteEurosEnPesetas NO es una función');
}

// TEST 2
if ( convierteEurosEnPesetas(2) === 336) {
    console.log('apruebas:  2 euros son 336 pesetas');
} else {
    console.log('suspendes');
}
// TEST 3
let rnd = Math.random() * 10;
if (convierteEurosEnPesetas(rnd) === rnd * 168) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}