const fs = require('fs');

setTimeout(() => { console.log('Hello From Timer 1') }, 0);

setImmediate(() => { console.log('Hello From setImmediate fn 1') });