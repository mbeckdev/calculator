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
      if (num2 == 0) {
        return "DIV/0 = BAD!";
      }
      return divide(num1, num2);
    // break;
    case "=":
      return runningTotal;
  }
}

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
  console.log(displayNumber.length);
  console.log(e.target.textContent == ".");
  if (e.target.textContent == "." && firstDotEntered == false) {
    firstDotEntered = true;
    document
      .getElementById("dot")
      .removeEventListener("click", addNumbersToScreen);
  }

  if (displayNumber.length < 12) {
    displayNumber = displayNumber + e.target.textContent;
  } else {
    displayNumber = "TOO MANY #S ";
  }
  console.log(displayNumber.length);
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
      display.textContent = checkCharLength(runningTotal);
      lastOperator = "=";
      break;
  }
  displayNumber = "";
  resetDot();
}

function clearDisplay(e) {
  displayNumber = "";
  populateDisplay();
  runningTotal = 0;
  lastOperator = "+";
  resetDot();
}

function toggleSign(e) {
  displayNumber = Number(displayNumber) * -1;
  populateDisplay();
}

function checkCharLength(number) {
  if (!(number.toString().length <= 12)) {
    // check is it a large decimal? or a large number?

    //if its a large number:  maybe return an e number....or just give an error: too many #s

    // if it's a decimal:
    // cut off the extra stuff on the right
    let theNum = Array.from(number.toString().split(""));

    // what's the length of the string?
    let strLength = theNum.length;
    // is there a decimal?
    let decimalPlaces = [];
    for (let i = 0; i < strLength; i++) {
      if (theNum[i] == ".") {
        decimalPlaces.push(i);
      }
    }

    if (decimalPlaces.length == 0) {
      // number = "TOO MANY #S ";
      number = `${(runningTotal / 10 ** (theNum.length - 1)).toFixed(1)}e${
        theNum.length - 1
      }`;
    } else if (decimalPlaces.length == 1) {
      let numberToRound = Number(number);
      // decimalPlaces[0] +1  -the character of the .
      //  12 - .place     // 12-2 = 10
      let decimalPlacesToRound = 12 - (decimalPlaces[0] + 1);
      number = Number(numberToRound.toFixed(decimalPlacesToRound));
    } else if (decimalPlaces > 1) {
      number = "ERROR: NaN  ";
    }
    console.log("yep");
  }
  return number;
}

let firstDotEntered = false;

function resetDot() {
  firstDotEntered = false;
  document.getElementById("dot").addEventListener("click", addNumbersToScreen);
}
//
//
// Optional things to improve in the future:

// add keyboard support
