
const addOperation = require('./add'),
      subOperation = require('./subtract'),
      multiplyOperation = require('./multiply'),
      divideOperation = require('./divide');

module.exports = (num1,num2,operation)=>{
  if(!operation) {throw ReferenceError('need an operation')};
  if(operation ==='+') {
    return addOperation(num1,num2);
  }
    else if (operation === '-') {
      return subOperation(num1,num2);
    }
    else if (operation === '*'){
      return multiplyOperation (num1,num2)
    }
    else if (operation === '/'){
      return divideOperation (num1,num2)
    }
}
