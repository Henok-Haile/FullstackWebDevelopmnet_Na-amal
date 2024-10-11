// Add function
const add = (a, b) => a + b;
document.getElementById('addButton').onclick = function() {
    const a = parseFloat(document.getElementById('addInput1').value);
    const b = parseFloat(document.getElementById('addInput2').value);
    const result = add(a, b);
    document.getElementById('addResult').innerText = result;
};

// Multiply function
const multiply = (a, b) => a * b;
document.getElementById('multiplyButton').onclick = function() {
    const a = parseFloat(document.getElementById('multiplyInput1').value);
    const b = parseFloat(document.getElementById('multiplyInput2').value);
    const result = multiply(a, b);
    document.getElementById('multiplyResult').innerText = result;
};

// Greet function
const greet = (name) => 'Hello, ' + name;
document.getElementById('greetButton').onclick = function() {
    const name = document.getElementById('greetInput').value;
    const result = greet(name);
    document.getElementById('greetResult').innerText = result;
};
