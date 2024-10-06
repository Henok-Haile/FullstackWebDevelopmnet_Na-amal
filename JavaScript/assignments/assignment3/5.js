// Initialize an empty array
const items = [];

// Function to add item to the array
function addItem() {
    let inputItem = document.getElementById('inputElement').value;
    if (inputItem) {
        // Add the input value to the array 
        items.push(inputItem);
        // Clear the input field
        document.getElementById('inputElement').value = '';
    }
}
// Function to display items from the array
function displayItems() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // clear any previous output

    // loop through the array and display each element
    for (let i = 0; i < items.length; i++) {
        resultDiv.innerHTML += `Element ${i + 1} = ${items[i]}<br>`;
    }
}
