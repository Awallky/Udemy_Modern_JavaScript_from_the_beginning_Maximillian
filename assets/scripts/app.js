// See vendor.js
/*
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
*/
const defaultResult = 0;
let currentResult = defaultResult;

const handleAdd = () => {
    outputResult(currentResult+(+userInput.value), currentResult + ' + ' + userInput.value);
    currentResult += (+userInput.value);
}
const handleSub = () => {
    outputResult(currentResult-(+userInput.value), currentResult + ' - ' + userInput.value);
    currentResult -= (+userInput.value);
}
const handleMul = () => {
    outputResult(currentResult*(+userInput.value), currentResult + ' * ' + userInput.value);
    currentResult *= (+userInput.value);
}
// num1 / num2
const handleDiv = () =>  {
    if((+userInput.value) === 0) {
        outputResult("NaN", "Invalid division operation");
    } else {
        outputResult(currentResult/(+userInput.value), currentResult + ' / ' + userInput.value);
        currentResult /= (+userInput.value);
    }
}

addBtn.addEventListener('click', handleAdd);
subtractBtn.addEventListener('click', handleSub);
multiplyBtn.addEventListener('click', handleMul);
divideBtn.addEventListener('click', handleDiv);

// const currentResult = '123';
// const description = 'Calculating...';
// outputResult(currentResult, description);
