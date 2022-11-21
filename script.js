// DOM / Global Variables
const calculationAnswer = document.querySelector("#display__answer");
const calculationExpression = document.querySelector("#display__expression");
const clearButton = document.querySelector("#input__clear");
const equalsButton = document.querySelector(".input__equals");
const backspaceButton = document.querySelector(".input__backspace");
const numberButtons = document.querySelectorAll(".input__number");
const operatorButtons = document.querySelectorAll(".input__operator");

let num1 = "";

// Functions

// function to input numbers: num1
const handleNum1 = (event) => {
  const userNumberInput = event.target.innerText;
  num1 += userNumberInput;
  calculationAnswer.innerText = num1;
  console.log(num1);
};

// might neeed this for later
// const displayNum1 = (num1) => {

// funtion to input operator
// if (innerText.target.value = "+")

// if no operator has been selected its num1 but if yes then its num2
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
  return result;
};

// function to clear display
const clearDisplay = () => {
  calculationAnswer.innerText = "0";
  calculationExpression.innerText = "";
};

// Event Listeners
clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", calculate);

//event listener for number buttons
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", handleNum1);
}
