const add = function(a, b) {
	return (Number(a) + Number(b));
};

const subtract = function(a, b) {
	return (a - b);
};

const multiply = function(a, b) {
	return (a * b);
};

const divide = function(a, b) {
    if (b == 0) {
        alert('Nice try, smartass');
        return;
    };
	return (a / b);
};

let firstNumber;
let secondNumber;
let operator;
let equation;
let resultValue;

const operate = function(a, operator, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: console.log("Can't do that"); return b;
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
   
    console.log(firstNumber, operator, secondNumber);
    console.log(e.target.id)
    inputValue = e.target.id;

    if (isNaN(inputValue)) {
        if (inputValue == 'Clear') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            resultValue = '';
            displayValue = '';
            display.textContent = 0; 
            return;
        }
        if (inputValue !== '=') {
            if (typeof firstNumber == 'undefined') {
                display.textContent = 0;
            }
            
            
            resultValue = operate(firstNumber, operator, secondNumber);
            if (typeof resultValue == 'number') {
                display.textContent = resultValue;
                firstNumber = resultValue;
                console.log("This shit working?")
                operator = inputValue;
                return;
            }
            operator = inputValue;
            firstNumber = displayValue;

        }
        if (inputValue === '=') {
            console.log(equation);
            console.log(operator);
            display.textContent = operate(firstNumber, operator, secondNumber);
            displayValue = display.textContent;
            
        }
        return;
    }

    else if ((typeof Number(inputValue)) === 'number') {
        console.log(Number(inputValue));
        
        if (typeof resultValue == 'number') {
            display.textContent = 0;
        }
        if (display.textContent == 0) {
            display.textContent = ''
        };

        display.textContent += inputValue;
        displayValue = display.textContent;
        secondNumber = displayValue;

        
    }


    equation = firstNumber + operator + secondNumber;
    console.log(firstNumber, operator, secondNumber);
    
});

