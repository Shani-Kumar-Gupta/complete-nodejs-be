const fs = require('fs');

setTimeout(() => { console.log('Hello From Timer 1') }, 0);

console.log('Hello From Top Level Code');

/*
Output:
Hello From Top Level Code
Hello From Timer 1
*/