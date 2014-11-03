
'use strict';

module.exports = {
  add : function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
  },
  substract : function substract(number1, number2) {
    return number1-number2;
  },
  multiply : function multiply(number1, number2) {
	    return number1*number2;
	  },
  divide : function divide(number1, number2) {
	    return (number1/number2);
	  }
};
