// DOM / Global Variables
const calculationAnswer = document.querySelector(".display__answer");
const calculationExpression = document.querySelector(".display__expression");
const clearButton = document.querySelector(".input__clear");
const equalsButton = document.querySelector(".input__equals");
const backspaceButton = document.querySelector(".input__backspace");
const numberButton = document.querySelectorAll(".input__numbers");
const operatorButton = document.querySelectorAll(".input__operator");

// Functions
const handleNumber = () => {
  numberButton.innerText.target.value;
};

// function to input numbers: num1
const getCalculationExpression = () => {
  return;
};

// funtion to input operator
// if (innerText.target.value = "+")

// function to input numbers: num2

// function to calculate

const calculate = (num1, num2, operator) => {
  let result = "";

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
};

// function to clear display
const clearDisplay = () => {
  calculationAnswer.innerText = "0";
  calculationExpression.innerText = "";
};

// Event Listeners
clearButton.addEventListener("click", clearDisplay);

equalsButton.addEventListener("click", calculate);
