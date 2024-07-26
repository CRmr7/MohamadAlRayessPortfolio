function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
        event.preventDefault(); // Prevent form submission
    } else if (event.key === 'Backspace') {
        clearDisplay();
    } else {
        switch (event.key) {
            case '+':
            case '-':
            case '*':
            case '/':
                appendToDisplay(event.key);
                break;
            case 'Escape':
                clearDisplay();
                break;
        }
    }
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if(display.value === 'Error') {
        display.value = value !== '+' && value !== '-' && value !== '*' && value !== '/' ? value : '';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = 'Error';
    }
}
