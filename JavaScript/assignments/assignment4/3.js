function checkOddEven() {
    // Get the start and end values from input fields
    const startValue = parseInt(document.getElementById('startValue').value);
    const endValue = parseInt(document.getElementById('endValue').value);

    // Validate that both inputs are filled and are numbers
    if (isNaN(startValue) || isNaN(endValue)) {
        document.getElementById('result').innerHTML = '<p>Please enter valid numbers for both start and end values.</p>';
        return;
    }

    // Ensure start value is less than or equal to end value
    if (startValue > endValue) {
        document.getElementById('result').innerHTML = '<p>Start value must be less than or equal to end value.</p>';
        return;
    }

    // Initialize the result string
    let resultHTML = '<p>Results:</p>';

    // Loop through the numbers from startValue to endValue
    for (let x = startValue; x <= endValue; x++) {
        if (x % 2 === 0) {
            resultHTML += `<p class="even">${x} is even</p>`;
        } else {
            resultHTML += `<p class="odd">${x} is odd</p>`;
        }
    }

    // Display the results in the result div
    document.getElementById('result').innerHTML = resultHTML;
}