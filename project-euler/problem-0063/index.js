'use strict';
const problem63 = require('./problem-0063');

console.time('Elapsed Time');
console.log('How many n-digit positive integers exist which are also an nth power?');

let count = problem63.powerDigitCount();

console.log(`${count}`);
console.timeEnd('Elapsed Time');