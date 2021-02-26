"use strict";

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
    case "+":
      return add(num1, num2);
    // break;
    case "-":
      return subtract(num1, num2);
    // break;
    case "*":
      return multiply(num1, num2);
    // break;
    case "/":
      return divide(num1, num2);
    // break;
  }
}
console.log(add(1, 2.1));
console.log(operate(1, "+", 2.1));
console.log(subtract(2.1, 1));
console.log(operate(2.1, "-", 1));
console.log(multiply(2.1, 2));
console.log(operate(2.1, "*", 2));
console.log(divide(9.3, 3));
console.log(operate(9.3, "/", 3));

// Functions that populate teh display when you clik the number buttons
// loop through all that have a class of 'number' and add event listener

function addInitialEventListeners() {
  let numbers = Array.from(document.querySelectorAll(".numbers"));
  numbers.forEach((e) => {
    // console.log(e);
    e.addEventListener("click", populateDisplay);
  });
  document.getElementById("dot").addEventListener("click", populateDisplay);
  // console.log(numbers);
  let operators = Array.from(document.querySelectorAll(".operator"));
  operators.forEach((e) => {
    e.addEventListener("click", clickOperator);
  });

  document.getElementById("clear").addEventListener("click", clearDisplay);
}
addInitialEventListeners();

const display = document.getElementById("screen");
let displayNumber = "";

function populateDisplay(e) {
  displayNumber = displayNumber + e.target.textContent;

  console.log(displayNumber); //is a string
  display.textContent = displayNumber;
}

let lastOperator = ""; //to hold +-*/ for later
let firstNumber = 0;
let secondNumber = 0;
function clickOperator(e) {
  console.log(e.target);
  switch (e.target.textContent) {
    case "+":
      firstNumber = displayNumber;
      lastOperator = "+";
      displayNumber = "";
      console.log("+");
      break;
    case "-":
      firstNumber = displayNumber;
      lastOperator = "-";
      displayNumber = "";
      console.log("-");
      break;
    case "*":
      firstNumber = displayNumber;
      lastOperator = "*";
      displayNumber = "";
      break;
    case "/":
      firstNumber = displayNumber;
      lastOperator = "/";
      displayNumber = "";
      break;
    case "=":
      //remember what we did befreo like click + or -
      //then call add() or subtact()
      secondNumber = displayNumber;
      let result = "";
      switch (lastOperator) {
        case "+":
          displayNumber = add(Number(firstNumber), Number(secondNumber));
          break;
        case "-":
          displayNumber = subtract(Number(firstNumber), Number(secondNumber));
          break;
        case "*":
          displayNumber = multiply(Number(firstNumber), Number(secondNumber));
          break;
        case "/":
          displayNumber = divide(Number(firstNumber), Number(secondNumber));
          break;
      }
      display.textContent = displayNumber;
      break;
  }
}

function clearDisplay(e) {
  displayNumber = "";
  display.textContent = displayNumber;
}
