const {assert:{isNumber,isFunction,equal} } = require('chai');
const add = require('../lib/add.js');

describe('add',()=>{
  it('should return a number',()=>{
    isNumber(add());
  });
  it('should be function',()=>{
    isFunction(add);
  });
  it('should handle a single argument',()=>{
    equal(add(4),4);
  });
  it('should handle arguments that are not numbers',()=>{
    isNumber(add("1","2"));
    isNumber(add(1,"2"));
    isNumber(add("1",2));
  });
  it('should do addition',()=>{
    equal(add(4,4),8);
  });
});
