"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;

  alert(c + " degrees Converted to f degrees is " + f);
}
let userInput = prompt("What is the temp in C?");
calculateTemp(userInput);

function determineAgeGroup(age) {
  if (age < 18) {
    alert("Minor");
  } else if (age >= 18 && age < 62) {
    alert("Adult");
  } else {
    alert("Senior");
  }
}
userInput = prompt("What is your age?");
determineAgeGroup(userInput);

function simpleMathCalculator(num1, num2, operator) {
  //addition, subtraction, multiplication, division;
  if (operator === "addition") {
    alert(Number(num1) + Number(num2));
  } else if (operator === "subtraction") {
    alert(num1 - num2);
  } else if (operator === "multiplication") {
    alert(num1 * num2);
  } else if (operator === "division") {
    alert(num1 / num2);
  }
}
let number1 = prompt("Please enter first number");
let number2 = prompt("Please enter second number");
let operator = prompt(
  "What operation will be used here? eg. addition, subtraction, multiplication, division"
);
simpleMathCalculator(number1, number2, operator);
