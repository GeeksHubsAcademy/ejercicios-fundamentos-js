////////////////////////////// 
//  1
//  Crea un objecto en la variable ordenador
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código



// Hasta aquí

// TEST 1
if (typeof ordenador === 'object') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 2
if (ordenador.marca === 'La pava') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 3
if (ordenador.tipo === 'portátil') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 4
if (ordenador.perifericos[1] === 'touchPad') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 5
if (ordenador['almacenamiento']['discos'][1] === 'HDD') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 7
if (ordenador.almacenamiento.discos[ ordenador.almacenamiento.maestro ] === 'SSD') {
    console.log('apruebas');
    
} else {
    console.log('suspendes');
}

