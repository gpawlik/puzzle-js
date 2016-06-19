'use strict';
const prime = require('./prime');

describe('isPrime', () => {
  it('should return true for known prime number 2', () => {
    expect(prime.isPrime(2)).toBeTruthy();
  });

  it('should return true for known prime number 3', () => {
    expect(prime.isPrime(3)).toBeTruthy();
  });

  it('should return false for known non-prime number', () => {
    expect(prime.isPrime(9)).toBeFalsy();
  });
  
  it('should return false for 1', () => {
    expect(prime.isPrime(1)).toBeFalsy();
  });

  it('large known prime number is determined quickly', () => {
    expect(prime.isPrime(32416190071)).toBeTruthy();
  });
});

describe('primeFactorization', () => {
  it('calculates prime factorization for known input', () => {
    expect(prime.primeFactorization(196)).toEqual([{ base: 2, exponent: 2 }, { base: 7, exponent: 2 }]);
  });

  it('calculates for large primes', () => {
    expect(prime.primeFactorization(32416190071)).toEqual([{ base: 32416190071, exponent: 1 }]);
  });
});
