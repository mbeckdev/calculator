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
  // if
  // console.log(displayNumber.length);

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
      number = "TOO MANY #S ";
    } else if (decimalPlaces.length == 1) {
      let returnArray = [];
      let numberToRound = Number(number);
      // decimalPlaces[0] +1  -the character of the .
      //  12 - .place     // 12-2 = 10
      let decimalPlacesToRound = 12 - (decimalPlaces[0] + 1);
      console.log(Number(numberToRound.toFixed(decimalPlacesToRound)));
      number = Number(numberToRound.toFixed(decimalPlacesToRound));

      // for (let j = 0; j < 12; j++) {
      //   returnArray.push(theNum[j]);
      // }
      // number = returnArray.join("");
    } else if (decimalPlaces > 1) {
      number = "ERROR: NaN  ";
    }
    console.log("yep");
    //   if so: what's the array place of the decimal
    //   does it still fit?
    //     if so: chop off the decimals on the right and return a string
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
//
// Things to do: make buttons darker on hover.
// for large numbers, 1e+24
// for small numbers, 1e-24
