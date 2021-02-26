'use strict';

      function add(a, b) {
        return a + b;
      }
      function subtract(a, b) {
        return a - b;
      }
      function multiply(a, b) {
        return a * b;
      }
      function divide(a, b) {
        return a / b;
      }
      function operate(num1, operator, num2) {
        switch (operator) {
          case '+':
            return add(num1, num2);
          // break;
          case '-':
            return subtract(num1, num2);
          // break;
          case '*':
            return multiply(num1, num2);
          // break;
          case '/':
            return divide(num1, num2);
          // break;
        }
      }
      console.log(add(1, 2.1));
      console.log(operate(1, '+', 2.1));
      console.log(subtract(2.1, 1));
      console.log(operate(2.1, '-', 1));
      console.log(multiply(2.1, 2));
      console.log(operate(2.1, '*', 2));
      console.log(divide(9.3, 3));
      console.log(operate(9.3, '/', 3));