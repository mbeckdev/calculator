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

// Functions that populate teh display when you clik the number buttons
// loop through all that have a class of 'number' and add event listener

function addInitialEventListeners() {
    let numbers = Array.from(document.querySelectorAll('.numbers'));
    numbers.forEach((e) => {
        // console.log(e);
        e.addEventListener('click', populateDisplay);
    });
    document.getElementById('dot').addEventListener('click',populateDisplay);
    // console.log(numbers);
    let operators = Array.from(document.querySelectorAll('operator'));
    // operators.forEach((e) => {
    //     e.addEventListener()
    // });
}
addInitialEventListeners();

const display = document.getElementById('screen');
let displayNumber = '';

function populateDisplay(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.getAttribute('id'));
    // console.log(e.target.textContent);

    displayNumber = displayNumber + e.target.textContent;
    
    console.log(displayNumber); //is a string
    display.textContent = displayNumber;
}
