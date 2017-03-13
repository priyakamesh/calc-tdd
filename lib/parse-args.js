'use strict'

module.exports = (args)=>{
  var num1 ='';
  var num2 = '';
  var operation = '';
  if((num1 === '') && (num2==='')&&(operation==='')) {
    return {num1,num2,operation};
  }
   num1 = args[0];
   num2 = args[1];
   operation = args[2];
  return {num1,num2,operation};
}
