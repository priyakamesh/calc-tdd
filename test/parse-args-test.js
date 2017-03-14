const {assert: {isObject,deepEqual,isNull,property} } = require ('chai');

const parseArgs = require('../lib/parse-args.js');

describe('parseArgs',()=>{
  it('should return object',()=>{
    isObject(parseArgs({num1:1,num2:2,operation:"add"}));
  });
  // it('should return object with 3 properties if its null',()=>{
  //   isNull(num1,num2,operation);
  // });
});
