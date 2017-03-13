'use strict'

const {argv:[,,..args]} = process,
      {num1,num2,operation} = require('./parse-args.js')(args)
