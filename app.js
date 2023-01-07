/* DOM elements */
// arrays of DOM elements
const numberButtons = document.querySelectorAll(".input__number");
const operatorButtons = document.querySelectorAll(".input__operator");

// individual DOM elements
const displayOutput = document.querySelector(".display__output");
const displayResult = document.querySelector(".display__result");

const clearButton = document.querySelector(".input__clear");
const equalsButton = document.querySelector(".input__equals");
const backspaceButton = document.querySelector(".input__backspace");
// const decimalButton = document.querySelector("#input__decimal-point");

let num1 = "";
let num2 = "";
let operator = "";

/* Functions */
// restrict decimal point
// const restrictDecimalPoint = () => {
//   if (selectedNum === "." && num1.includes(".")) {
//     return;
//   }
// };

// function to input numbers (num1 and num2)
const handleNumInput = (event) => {
  const selectedNum = event.target.innerText;
  // const restrictDecimalPoint = () => {
  //   if (selectedNum === "." && !num1.includes(".")) {
  //     return;
  //     // if (selectedNum === "." && num1.includes(".")) {
  //     //   return;
  //     showOutput();
  //   }
  // };

  if (operator === "") {
    // restrictDecimalPoint();
    num1 += selectedNum;
  } else {
    num2 += selectedNum;
  }
  showOutput();
};

// funtion to input operator
const handleOperatorInput = (event) => {
  const selectedOperator = event.target.innerText;

  if (num2 !== "") {
    num1 = calculateResult(num1, operator, num2);
    num2 = "";
    operator = selectedOperator;
    showOutput();
    return;
  }

  operator = selectedOperator;
  showOutput();
};

// function to display inputs on display output
const showOutput = () => {
  const outputExpressionString = `${num1} ${operator} ${num2}`;
  displayOutput.value = outputExpressionString;
};

// function to calculate with inputted numbers and operator
const calculateResult = (firstNum, operator, secondNum) => {
  const parsedFirstNum = parseFloat(firstNum);
  const parsedSecondNum = parseFloat(secondNum);

  if (operator === "+") {
    return parsedFirstNum + parsedSecondNum;
  } else if (operator === "-") {
    return parsedFirstNum - parsedSecondNum;
  } else if (operator === "*") {
    return parsedFirstNum * parsedSecondNum;
  } else if (operator === "/") {
    return parsedFirstNum / parsedSecondNum;
  }
};

// function to use equals button
const handleEquals = () => {
  const result = calculateResult(num1, operator, num2);
  displayResult.value = result;
};

// function to use backspace button
const handleBackspace = (event) => {
  if (operator === "") {
    num1 = num1.slice(0, -1);
  } else {
    num2 = num2.slice(0, -1);
  }
  showOutput();
};

// function to clear display
const handleClear = (event) => {
  num1 = "";
  num2 = "";
  operator = "";
  displayOutput.value = "";
  displayResult.value = "";
  showOutput();
};

/* Event Listeners */

//event listener for number buttons
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", handleNumInput);
}

// event listener for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
  operatorButtons[index].addEventListener("click", handleOperatorInput);
}

// event listener to display answer when pressing equals button
equalsButton.addEventListener("click", handleEquals);

// event listener for backspace button
backspaceButton.addEventListener("click", handleBackspace);

// event listener for clear button
clearButton.addEventListener("click", handleClear);

// // event listener for decimal point
// decimalButton.addEventListener("click", handleDecimalRestriction);
