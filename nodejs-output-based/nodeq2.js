const fs = require('fs');

setTimeout(() => { console.log('Hello From Timer 1') }, 0);

setImmediate(() => { console.log('Hello From setImmediate fn 1') });

console.log('Hello From Top Level Code');

/*
Output:
Hello From Top Level Code
Hello From Timer 1
Hello From setImmediate fn 1
*/