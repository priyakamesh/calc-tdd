const {assert: {isFunction,isNumber,equal}} = require('chai');
const multiply = require('../lib/multiply.js');

describe ('multiply',()=>{
  it('should be a function',()=>{
    isFunction(multiply);
  });
  it('should return a number',()=>{
    isNumber(multiply());
  });
  it('should do multiplication',()=>{
    equal(multiply(4,1),4);
  });
  it('should handle single argument',()=>{
    equal(multiply(4),4);
  });
});
