let currentInput = '';
let history = [];

function fn(value) {
    // If the value is an operator, prevent consecutive operators
    if (['+', '-', '*', '/', '%'].includes(value)) {
        if (currentInput === '' || isOperator(currentInput.slice(-1))) {
            return; // Prevent adding consecutive operators
        }
    }
    currentInput += value; // Append the clicked button value
    updateDisplay(currentInput);
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

function eq() {
    try {
        const result = eval(currentInput);
        history.push(`${currentInput} = ${result}`);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}

function clearAll() {
    currentInput = '';
    updateDisplay(currentInput);
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function showHistory() {
    const memoryDisplay = document.getElementById('memory-display');
    memoryDisplay.style.display = 'block';
    memoryDisplay.innerHTML = history.length ? history.join('<br>') : 'No history available.';
}

function showAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = aboutSection.style.display === 'block' ? 'none' : 'block';
}
