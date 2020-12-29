const { strict } = require('assert');
const fs = require('fs');

fs.readFile('./input.txt', ( err, data ) => {
    console.time('funchallenge')
    if (err) {
        console.log('Error');
    }
    
    var str = data.toString();
    var floor = 0;
    for (var i = 0; i < str.length; i++) { 
        if (str.charAt(i) === '(')
            floor = floor + 1;
        else
            floor = floor - 1;
    }
    
    
    console.log(floor);
    console.timeEnd('funchallenge');
})


