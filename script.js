let displayElement = document.getElementById('display');
let currentInput = "";
let expression = "";  

function clearDisplay() {
  currentInput = "";
  expression = "";
  displayElement.innerText = "0";
}

function deleteDigit() {
  currentInput = currentInput.slice(0, -1);
  expression = expression.slice(0, -1);
  displayElement.innerText = expression || "0";
}

function appendNumber(number) {
  currentInput += number;
  expression += number;
  displayElement.innerText = expression;
}

function appendOperator(op) {
  
  if (currentInput === "" && expression === "") return;

  if (/[+\-*/]$/.test(expression)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }

  currentInput = "";  
  displayElement.innerText = expression;
}

function calculate() {
  try {
    
    const result = eval(expression);

    if (result === Infinity || isNaN(result)) {
      displayElement.innerText = "Error";
      expression = "";
      currentInput = "";
    } else {
      displayElement.innerText = result;
      expression = result.toString();
      currentInput = "";
    }
  } catch (error) {
    displayElement.innerText = "Error";
    expression = "";
    currentInput = "";
  }
}
