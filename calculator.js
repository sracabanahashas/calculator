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
        alert("We don't divide by zero in this household.");
        return;
    };
	return (a / b);
};

let firstNumber = '';
let secondNumber = '';
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

let display = document.querySelector('#display');
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

    // Operator and clear button inputs //
    if (isNaN(inputValue)) {

        // Clear button input //
        if (inputValue == 'Clear') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            resultValue = '';
            displayValue = 0;
            display.textContent = 0; 
            return;
        }
        
        // Operator buttons input //
        if (inputValue !== '=') {
            if (typeof firstNumber == 'undefined') {
                display.textContent = 0;
            }
            
            
            resultValue = operate(firstNumber, operator, secondNumber);
            if (typeof resultValue == 'number') {
                display.textContent = resultValue;
                firstNumber = resultValue;
                console.log("display result")
                operator = inputValue;
                return;
            }
            operator = inputValue;
            firstNumber = displayValue;
            secondNumber = '';

        }

        // Equals button input // 
        if (inputValue === '=') {
            console.log(equation);
            console.log(operator);
            displayValue = operate(firstNumber, operator, secondNumber);
            display.textContent = displayValue;
            if (displayValue == '') {
                display.textContent = 0
            };
            
        }
        return;
    }

    // Number button input //
    else if ((typeof Number(inputValue)) === 'number') {
        console.log(Number(inputValue));
       
        /*if (displayValue == 0) {
            display.textContent = '';
            console.log('reset display');
        };*/
        
        if (typeof resultValue == 'number') {
            secondNumber = '';
            
        }

        secondNumber += inputValue;
       
        displayValue = secondNumber;

        
    }

    display.textContent = displayValue;
    resultValue = '';

    equation = firstNumber + operator + secondNumber;
    console.log(resultValue, displayValue, firstNumber, operator, secondNumber);
    
});

