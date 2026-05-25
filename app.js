function appendToDisplay(value) {   
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
const keyboard = document.getElementById('keyboard');

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
keyboard.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
navigator.clipboard.readText().then(text => {
    document.getElementById('display').value = text;
}).catch(err => {
    console.error('Failed to read clipboard contents: ', err);
});
const display = document.getElementById('display');
display.addEventListener('paste', function(event) {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    appendToDisplay(text);
});

