const add = function(num1, num2) {
  let addFunc = num1 + num2;
  return addFunc
	
};

const subtract = function(num1, num2) {
  let subFunc = num1 - num2;
  return subFunc;
	
};

const sum = function(arr) {
  let initNum = 0;
  let sumFunc = arr.reduce((previousNum, currentNum) => previousNum + currentNum, initNum);
  return sumFunc
};

const multiply = function(mul) {
  let initMul = 1;
  let sumMul = mul.reduce((mul1, mul2) => mul1 * mul2, initMul); 
  return sumMul
};

const power = function(powerNum1, powerNum2) {
  let powerFunc = powerNum1**powerNum2;
  return powerFunc;
	
};

const factorial = function(factNum) {
  let factArray = [];
  for(i = 1; i <= factNum; i++ ) {
    factArray.push(i)
  }
  let initFact = 1;
	let factFunc = factArray.reduce((fact1, fact2) => fact1 * fact2, initFact)
  return factFunc
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
