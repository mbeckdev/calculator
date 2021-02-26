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
    case "=":
      return runningTotal;
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
    e.addEventListener("click", addNumbersToScreen);
  });

  document.getElementById("dot").addEventListener("click", addNumbersToScreen);
  let operators = Array.from(document.querySelectorAll(".operator"));

  operators.forEach((e) => {
    e.addEventListener("click", clickOperator);
  });

  document.getElementById("clear").addEventListener("click", clearDisplay);
  document.getElementById("plusminus").addEventListener("click", toggleSign);
}
addInitialEventListeners();

const display = document.getElementById("inner-screen");
let displayNumber = "";

function addNumbersToScreen(e) {
  displayNumber = displayNumber + e.target.textContent;
  populateDisplay();
}
function populateDisplay() {
  display.textContent = displayNumber; //  displayNumber is a string
}

let lastOperator = "+"; //to hold +-*/ for later
let runningTotal = 0; //
let secondNumber = 0;

function clickOperator(e) {
  console.log(e.target);
  runningTotal = operate(
    Number(runningTotal),
    lastOperator,
    Number(displayNumber)
  );
  switch (e.target.textContent) {
    case "+":
      lastOperator = "+";
      console.log("+");
      break;
    case "-":
      lastOperator = "-";
      console.log("-");
      break;
    case "*":
      lastOperator = "*";
      break;
    case "/":
      lastOperator = "/";
      break;
    case "=":
      //remember what we did befreo like click + or -
      //then call add() or subtact()

      display.textContent = runningTotal;
      lastOperator = "=";
      break;
  }
  displayNumber = "";
}

function clearDisplay(e) {
  displayNumber = "";
  populateDisplay();
  runningTotal = 0;
  lastOperator = "+";
}

function toggleSign(e) {
  displayNumber = Number(displayNumber) * -1;
  populateDisplay();
}

//
//
//
// Things to do: make buttons darker on hover.
