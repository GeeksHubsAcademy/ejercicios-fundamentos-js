////////////////////////////// 
//  8
//  Crear una función llamada convierteEurosEnPesetas
//  igual a la del ejercicio anterior 
//  pero además debe lanzar un error si no recibe un tipo number
//  Debes lanzar un error con la sentencia:
//  throw new Error('convierteEurosEnPesetas debe recibir un number');

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
    console.log('apruebas:  2 euros son 336');
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

// TEST 4
try {
    convierteEurosEnPesetas(true);
    convierteEurosEnPesetas();
    convierteEurosEnPesetas('1');
    console.log('suspendes: convierteEurosEnPesetas debe lanzar un error si no recibe un número');
    
} catch (error) {
    console.log('apruebas');
        
}