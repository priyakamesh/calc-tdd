const {assert:{isFunction,property,isNumber,equal,throws}} = require('chai');
const calc = require('../lib/calc.js');

describe('calc',()=>{
  it('should be a function',()=>{
    isFunction(calc);
  });
  it('should return number',()=>{
    isNumber(calc(2,2,'+'));
  });
  it('should return subtracted number', ()=>{
    equal(calc(2,2,'-'),0);
  });
  it('should return multiplied number', ()=>{
    equal(calc(2,2,'*'),4);
  });
  it('should return divided number', ()=>{
    equal(calc(2,2,'/'),1);
  });
  it('should throw an error when no args passed',()=>{
    throws(()=>{calc()});
  })

});
