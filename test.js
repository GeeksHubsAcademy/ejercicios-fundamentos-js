let _ = require('lodash');

const testing = function (fun, inputs, output) {
    if (_.isEqual(fun(...inputs) , output)) {
        console.log(`test ok!
        Arguments: ${JSON.stringify(inputs)}  match ${JSON.stringify(output)}`);
        
    } else {
        console.error(`'test fail:
        ${JSON.stringify(inputs)} do not match ${JSON.stringify(output)}
        it returns: ${JSON.stringify(fun(...inputs))}`);
        
    }
    console.log('\n');
    
}

module.exports = testing;

