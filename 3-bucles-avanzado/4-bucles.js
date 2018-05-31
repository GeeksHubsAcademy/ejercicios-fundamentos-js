////////////////////////////// 
//  4
//  Crea una variable llamada acronimo 
//  que sea tipo string 
//  y tenga la primera letra de cada item del array llamado frase
//  de tal modo que el siguiente código no muestre por consola 'suspendes'

let frase = Math.random() > 0.5 ? ['unite', 'states', 'america'] : ['aeropuertos', 'Españoles', 'Navegación', 'Aérea']

console.log('El array frase es: ', frase);
// Aquí tu código



// Hasta aquí
console.log('El string acronimo es: ', acronimo);

// TEST 1
if (typeof acronimo === 'string') {
    console.log('apruebas');
} else {
    console.log('suspendes:  El acronimo debe ser un string');
}

// TEST 2
if (acronimo.toUpperCase() === 'USA' || acronimo.toUpperCase() === 'AENA') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 3
if (acronimo === 'USA' || acronimo === 'AENA') {
    console.log('apruebas');
} else {
    console.log('suspendes, El Acronimo debe ser en mayúsculas');
}