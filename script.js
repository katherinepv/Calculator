// DOM / Global Variables
const calculationAnswer = document.querySelector("#display__answer");
const calculationExpression = document.querySelector("#display__expression");
const clearButton = document.querySelector("#input__clear");
const equalsButton = document.querySelector(".input__equals");
const backspaceButton = document.querySelector(".input__backspace");
const numberButtons = document.querySelectorAll(".input__number");
const operatorButtons = document.querySelectorAll(".input__operator");

let num1 = "";
let operator = "";
let num2 = "";

// Functions

// function to input numbers: num1
const handleNum1 = (event) => {
  const userNumber1Input = event.target.innerText;
  num1 += userNumber1Input;
  calculationExpression.innerText = num1;
  // num1 = Number(num1); this may be needed further down
  console.log(num1);
};

// might neeed this for later
// const displayNum1 = (num1) => {

// funtion to input operator
const handleOperator = (event) => {
  const userOperatorInput = event.target.innerText;
  operator = userOperatorInput;
  calculationExpression.innerText = `${num1} ${operator}`;
};

// function to input numbers: num2
const handleNum2 = (event) => {
  if (operator === true) {
    const userNumber2Input = event.target.innerText;
    num2 += userNumber2Input;
    calculationExpression.innerText = `${num1} ${operator} ${num2}`;
  }
  return;
};

// if no operator has been selected its num1 but if yes then its num2

// function to calculate
const calculate = (num1, num2, operator) => {
  let result = "";

  if (operator === "+") {
    result = Number(num1) + Number(num2);
  } else if (operator === "-") {
    result = Number(num1) - Number(num2);
  } else if (operator === "*") {
    result = Number(num1) * Number(num2);
  } else if (operator === "/") {
    result = Number(num1) / Number(num2);
  }
  return result;
  calculationAnswer.innerText = result;
};

// function to clear display
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = "";
  calculationAnswer.innerText = "0";
  calculationExpression.innerText = "";
};

// Event Listeners

//event listener for number1 buttons
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", handleNum1);
}

// event listener for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
  operatorButtons[index].addEventListener("click", handleOperator);
}

// event listener for number2 buttons
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", handleNum2);
}

clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", calculate);
