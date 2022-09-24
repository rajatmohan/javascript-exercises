const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(list) {
	return list.reduce((totalSum, item) => totalSum+item, 0);
};

const multiply = function(list) {
  return list.reduce((totalMul, item) => totalMul*item, 1);
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(n) {
	let fact = 1;
  for(let i = 1; i <= n; i++) {
    fact = fact*i;
  }
  return fact;
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
