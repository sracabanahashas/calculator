const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const multiply = function(a, b) {
	return (a * b);
};

const divide = function(a, b) {
	return (a / b);
};

let firstNumber;
let secondNumber;
let operator;

const operate = function(a, operator, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: console.log("Can't do that")
    }
}

let display = document.querySelector('div');
let displayValue = 0;
let btn = document.querySelector('#wrapper');

display.textContent = displayValue;

btn.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
    return;
  }
    console.log(e.target.id)
    displayValue = e.target.id;
    if (isNaN(displayValue)) {return isNaN(displayValue)}
    else if ((typeof Number(displayValue)) === 'number') {
        console.log(Number(displayValue));
        display.textContent = displayValue;
    }
});