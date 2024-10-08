function computeNumber() {
    // Get the values from the input fields
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    let result;

    // Checks both input are not strings
    if (num1 === "" && num2 === "") {
        result = "You didn't enter any number in both fields.";
    }
    // Check if only the first field is empty
    else if (num1 === "") {
        result = "You didn't enter a number in the first field.";
    }
    // Check if only the second field is empty
    else if (num2 === "") {
        result = "You didn't enter a number in the second field.";
    }
    // Check if both values are valid numbers because I used input type a number no need for this multi line comment
    /*
    else if (isNaN(num1) && isNaN(num2)) {
        result = 'Please enter valid numbers in both fields.';
    }
    else if (isNaN(num1)) {
        result = 'Please enter valid numbers in first field.';
    }
    else if (isNaN(num2)) {
        result = 'Please enter valid numbers in second field.';
    }
    */
    else {
        // if the number are equal. return triple thier sum else return thier sum
        if (num1 === num2) {
            result = `The number are equal. Tripling thier sum is ${3 * (Number(num1) + Number(num2))}`;
        }
        else {
            result = `The sum of the two numbers is ${Number(num1) + Number(num2)}`;
        }
    }

    // Display the result in the result div
    document.getElementById('result').innerText = result;
}