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
    inputValue = e.target.id;
    if (isNaN(inputValue)) {return isNaN(inputValue)}
    else if ((typeof Number(inputValue)) === 'number') {
        console.log(Number(inputValue));
        if (display.textContent == 0) {
            display.textContent = ''
        };
        display.textContent += inputValue;
    }
});