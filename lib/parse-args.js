'use strict'

module.exports = (args)=>{
  var num1,num2,operation;
  // if((num1 === null) || (num2=== null)||(operation===null)) {
  //   return {num1,num2,operation};
  // }
  var argsArr = args.toString().split(',')
  console.log(argsArr)
    num1 = parseInt(argsArr[0]);
    num2 = parseInt(argsArr[1]);
    operation = argsArr[2];
  return {num1:num1,num2:num2,operation:operation};
}
