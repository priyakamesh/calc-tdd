const {assert: {isNumber,isFunction,equal}} = require('chai');
const subtract = require('../lib/subtract.js');

describe('subtract',()=>{
  it('should return a number',()=>{
    isNumber(subtract());
  });
  it('should be a function',()=>{
    isFunction(subtract);
  });
  it('should handle a single argument',()=>{
    equal(subtract(4),4);
  });
  it('should do subtraction',()=>{
    equal(subtract(4,4),0);
  });
});
