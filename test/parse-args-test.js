const {assert: {isObject,deepEqual} } = require ('chai');

const parseArgs = require('../lib/parse-args.js');

describe('parseArgs',()=>{
  it('should return object',()=>{
    isObject(parseArgs());
  });
  it('should return object with 3 properties',()=>{
    deepEqual({num1:'',num2:'',operation:''},parseArgs());
  });
});
