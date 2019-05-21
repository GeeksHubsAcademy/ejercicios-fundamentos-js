// Make an array of strings of the names
// The function will recive an array of objects with 2 properties: name and age
// Example input [{name: 'Juan', age: 22}] ex. output ['Juan']

function namesOnly(persons){
    // your code here
}



let test = require('../test.js');

test(namesOnly, [[]], []);
test(namesOnly, [[{name: 'Juan', age: 2}, {name: 'Paco', age: 2}]], ['Juan', 'Paco']);
test(namesOnly, [[{name:  'David'}]], ['David']);