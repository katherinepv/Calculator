/* DOM / Global Variables */
const calculationAnswer = document.querySelector("#display__answer");
const calculationExpression = document.querySelector("#display__expression");
const clearButton = document.querySelector("#input__clear");
const equalsButton = document.querySelector(".input__equals");
const backspaceButton = document.querySelector(".input__backspace");
const numberButtons = document.querySelectorAll(".input__number");
const operatorButtons = document.querySelectorAll(".input__operator");
const decimalButton = document.querySelector("#input__decimal-point");

let num1 = "";
let operator = "";
let num2 = "";

/* Functions */

// function to input numbers (num1 and num2)
const getNumInput = (event) => {
  const userNumberInput = event.target.innerText;
  if (operator === "") {
    num1 += userNumberInput;
    console.log(num1);
  } else {
    num2 += userNumberInput;
    console.log(num2);
  }
  updateExpressionDisplayHtml();
};

// funtion to input operator
const getOperator = (event) => {
  const userOperatorInput = event.target.innerText;
  operator = userOperatorInput;
  console.log(operator);
  updateExpressionDisplayHtml();
  //   if (operator !== "" && num2 !== "") {
  //     return;
  //   }
};

// function to display inputs on expression display
const updateExpressionDisplayHtml = () => {
  calculationExpression.innerText = `${num1} ${operator} ${num2}`;
};

// function to calculate with inputted numbers and operator
const calculate = () => {
  let result = "";

  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "/") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  calculationAnswer.innerText = `${result}`;
  console.log(result);
};

// function to use backspace button
const handleBackspace = (event) => {
  let removeLastInput = calculationExpression.innerText.slice(0, -1);
  return (calculationExpression.innerText = removeLastInput);
};

// function to restrict decimal point usage
const handleDecimalPoint = (event) => {
  if (userNumberInput === "." && num1.includes(".")) {
    return;
  } else if (usernumberInput === "." && num2.includes(".")) {
    return;
  } else {
  }
};

// function to clear display
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = "";
  calculationAnswer.innerText = "0";
  calculationExpression.innerText = "";
};

/* Event Listeners */

//event listener for number buttons
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", getNumInput);
}

// event listener for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
  operatorButtons[index].addEventListener("click", getOperator);
}

// event listener to display answer when pressing equals button
equalsButton.addEventListener("click", calculate);

// event listener for backspace button
backspaceButton.addEventListener("click", handleBackspace);

// event listener for clear button
clearButton.addEventListener("click", clearDisplay);

// event listener for decimal point
decimalButton.addEventListener("click", handleDecimalPoint);
