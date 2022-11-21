// DOM / Global Variables
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

// Functions

// function to input numbers: num1
const handleNum1 = (event) => {
  const userNumberInput = event.target.innerText;
  num1 += userNumberInput;
  calculationAnswer.innerText = num1;
  console.log(num1);
  // num1 = Number(num1); this may be needed further down
  /*if (userNumberInput.includes(operator)) {
    break; trying to make num1 and num2 seperate
    console.log(num1);*/
};

// //trying to merge num1 and num2 into one function
// const handleNum = (event) => {
//   if (calculationExpression === false) {
//     const userNumberInput = event.target.innerText;
//     num1 += userNumberInput;
//     calculationExpression.innerText = num1;
//   }
//   if (calculationExpression === true && operator === true) {
//     const userNumberInput = event.target.innerText;
//     num2 += userNumberInput;
//     calculationExpression.innerText = num2;
//   }
// };

// might neeed this for later
// const displayNum1 = (num1) => {

// funtion to input operator
const handleOperator = (event) => {
  const userOperatorInput = event.target.innerText;
  operator = userOperatorInput;
  calculationExpression.innerText = `${num1} ${operator}`;
  console.log(operator);
};

// function to input numbers: num2
const handleNum2 = (event) => {
  if (operator !== "") {
    const userNumber2Input = event.target.innerText;
    num2 += userNumber2Input;
    calculationAnswer.innerText = /*`${num1} ${operator}*/ `${num2}`;
    console.log(num2);
  }
  return;
};

// if no operator has been selected its num1 but if yes then its num2

// function to calculate
const calculate = (num1, num2, operator) => {
  let result = "";

  if (operator == "+") {
    result = Number(num1) + Number(num2);
  } else if (operator == "-") {
    result = Number(num1) - Number(num2);
  } else if (operator == "*") {
    result = Number(num1) * Number(num2);
  } else if (operator == "/") {
    result = Number(num1) / Number(num2);
  }
  // return result;
  console.log(result);
  calculationAnswer.innerText = `${result}`;
};

// function to clear display
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = "";
  calculationAnswer.innerText = "0";
  calculationExpression.innerText = "";
};

// function to use backspace button
const handleBackspace = (event) => {
  let removeLastInput = calculationExpression.innerText.slice(0, -1);
  return removeLastInput;
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
backspaceButton.addEventListener("click", handleBackspace);
decimalButton.addEventListener("click", handleBackspace);
