const {assert : {isFunction,isNumber,equal}} = require('chai');
const divide = require('../lib/divide.js');

describe('divide',()=>{
  it('should be a function',()=>{
    isFunction(divide);
  });
  it('should return a number',()=>{
    isNumber(divide());
  });
  it('should do division',()=>{
    equal(divide(4,4),1);
  });
  it('should handle single argument',()=>{
    equal(divide(4),4);
  });
});
