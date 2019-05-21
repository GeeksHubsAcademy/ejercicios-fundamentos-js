// Make an array with songs of the artist given

//Example input 
// [
//     { 
//         song: 'Born in the U.S.A.', 
//         artist: 'Bruce Springsteen'
//     },
//     {
//         song: 'La macarena',
//         artist: 'Los del Rio'
//     }
// ]

// 'Bruce Springsteen'

//Example output: ['Born in the U.S.A.']


function songsOfArtist(songs, artistName){
    //Your code goes here
}

let test = require('../test.js');

test(songsOfArtist, [[]], []);
test(songsOfArtist, [[
    { 
        song: 'Born in the U.S.A.', 
        artist: 'Bruce Springsteen'
    },
    {
        song: 'La macarena',
        artist: 'Los del Rio'
    }
], 'Bruce Springsteen'], ['Born in the U.S.A.']);
test(songsOfArtist, [[
    { 
        song: 'Born in the U.S.A.', 
        artist: 'Bruce Springsteen'
    },
    {
        song: 'La macarena',
        artist: 'Los del Rio'
    }
], 'None'], []);
