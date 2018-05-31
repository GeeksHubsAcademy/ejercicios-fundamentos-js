// crea la función extraerAcronimo
// Esta función recibe un numero indeterminado de argumentos
// y los recibiremos en la array input con el operador rest (...input)
// Debe devolver un string con sus iniciales 
// Por ejemplo:
// extraerAcronimo('Estudiante','Del','Bootcamp','Fullstack','Geekshubs') === 'EDBFG'


// 
// utilizar un bucle for of

// Ha de pasar los test adjuntados.

let extraerAcronimo = (...input) => {
    let acronimo = '';
    // Aquí tu código.  Desde aquí:
   
    // Hasta aquí.
    return acronimo;
}


let test = require('../test.js');

test(extraerAcronimo, ['Estudiante', 'Del', 'Bootcamp', 'Fullstack', 'Geekshubs'], 'EDBFG');
test(extraerAcronimo, ['hola', 'caracola'], 'hc');
test(extraerAcronimo, ['33', '44',' '], '34 ');
