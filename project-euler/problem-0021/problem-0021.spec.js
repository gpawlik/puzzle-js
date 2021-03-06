'use strict';
const problem21 = require('./problem-0021');

describe('amicableNumberSum', () => {
  beforeEach(function() {
    problem21.properDivisorSums = [];
  });
  
  it('calculates known input', () => {
    expect(problem21.amicableNumberSum(285)).toBe(504);
  });

  it('only sums numbers lower than n', () => {
    expect(problem21.amicableNumberSum(220)).toBe(0);
  });

  it('sum lower pair only when higher pair is above n', () => {
    expect(problem21.amicableNumberSum(221)).toBe(220);
  });
});
