const text = document.getElementById('text');
const buttons = document.querySelectorAll('td');

let currentInput = '';

function handleInput(value) {
    if (value === 'AC') {

        currentInput = '';
    } else if (value === 'bksp') {  
        currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
        currentInput = eval(currentInput).toString();
    } else {
        const lastChar = currentInput.slice(-1);
        if ('+-*/.'.includes(value) && '+-*/.'.includes(lastChar)) {
            return; 
        }
        currentInput += value;
    }
    text.textContent = currentInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('value');
        handleInput(value);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ('0123456789+-*/.=AC'.includes(key) || key === 'Backspace' || key === 'Enter' || key === 'Escape') {
        if (key === 'Backspace') {
            handleInput('bksp');
        } else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Escape') {
            handleInput('AC');
        } else {
            handleInput(key);
        }
    }
});
