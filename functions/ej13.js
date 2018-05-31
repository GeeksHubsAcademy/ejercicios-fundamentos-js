// crea una función llamada filtraGente
// recibe un array que contiendo objetos con dos propiedades nombre y edad

// devuelve un array con la gente que su nombre tiene 4 letras y menores de 15 años

// utiliza el método filter de los arrays.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]



// Aquí tu código.  Desde aquí:
const filtraGente 
// Hasta aquí.


let test = require('./test.js');

// filtrarGente(gente) ---> {nombre: 'Pepe',edad: 14}]

test(filtraGente, [gente], [{
    nombre: 'Pepe',
    edad: 14
}] );
