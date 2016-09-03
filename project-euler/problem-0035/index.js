'use strict';
const problem35 = require('./problem-0035');

console.time('Elapsed Time');
let result = problem35.circularPrimes(1000000);
console.log('The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime. There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97. How many circular primes are there below one million?');
console.log(result.length);
console.timeEnd('Elapsed Time');