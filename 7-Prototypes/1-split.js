// Completa la función getCiudadesOrdenada
// La función recibirá una cadena de texto de ciudades separadas por comas 
// y devolverá un array de ciudades ordenadas alfabéticamente

// si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

let getCiudadesOrdenadas= (ciudades) => {
    // Aquí tu código.  Desde aquí:
    // Hasta aquí.
}


let test = require('../test.js');

test(getCiudadesOrdenadas, ['castellon, valencia, zamora, alicante'], ["alicante","castellon","valencia","zamora"]);
test(getCiudadesOrdenadas, [''], 'no es un formato correcto');
test(getCiudadesOrdenadas, [{}], 'no es un formato correcto');
