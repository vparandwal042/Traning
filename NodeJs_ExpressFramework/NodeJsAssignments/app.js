const calculator = require('./calculator.js');
console.log(calculator.sum());
console.log(calculator.multiplication());

const sumop = require('./operations/sum.js');
const mulop = require('./operations/multiplication.js');
const subop = require('./operations/subtraction.js');
const divop = require('./operations/division.js');
sumop.sum();
mulop.multiplication();
subop.subtraction();
divop.division();

const moment = require('moment');
let now = moment();
console.log(now.format('dddd, MMMM Do YYYY, hh:mm:ss'), calculator.sum(), calculator.multiplication());