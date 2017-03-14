'use strict'

const {argv:[,,...args]} = process,
      {num1,num2,operation} = require('./parse-args.js')(args),
      answer = require('./calc.js')(num1,num2,operation)
      console.log(answer)
