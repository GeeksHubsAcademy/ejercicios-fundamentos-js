// Mejoras en la función  sumaDesdeHasta

// Debe hacer los mismo que la función del ejercicio 7 y además:

// si la función recibe un numero de 
// inicio mayor que el de final debe funcionar igual, sumando los enteros entre ellos.
// para ello deberemos hacer un bucle en descenso.
// utilizad un bucle for (let i = hasta; i <= desde; i++ ) {}

// Ha de pasar los test adjuntados.

let sumaDesdeHasta = (desde, hasta) => {
    let sumatorio = 0;
    // Aquí tu código.  Desde aquí:

    // Hasta aquí.
    return sumatorio;
}


let test = require('../test.js');

test(sumaDesdeHasta, [1, 2], 3);
test(sumaDesdeHasta, [2, 2], 2);
test(sumaDesdeHasta, [4, 6], 15);

test(sumaDesdeHasta, [2, 1], 3);
test(sumaDesdeHasta, [4, 2], 9);
test(sumaDesdeHasta, [-1, -2], -3);
