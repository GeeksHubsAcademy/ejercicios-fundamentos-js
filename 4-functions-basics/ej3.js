// crea la función caracterInicial
// debe recibir un tipo string y devolver un string con el primer caracter

// Si la función no recibe un dato tipo string debe
// devolver el string 'Debo ser ejecutada con un string'

// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

// Ha de pasar los test adjuntados.

let caracterInicial = (texto) => {
    // Aquí tu código.  Desde aquí:
    
    // Hasta aquí.
}


let test = require('../test.js');
//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: caracterInicial('juan') === 'j'
test(caracterInicial, ['juan'], 'j');
test(caracterInicial, ['Hola'], 'H');
test(caracterInicial, [''], 'Debo ser ejecutada con un string no vacío');
test(caracterInicial, [true], 'Debo ser ejecutada con un string');
test(caracterInicial, [], 'Debo ser ejecutada con un string');