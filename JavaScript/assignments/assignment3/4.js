function closestToHundred() {

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

    else {
        // Check if both fields are empty
        if (isNaN(num1) && isNaN(num2)) {
            result = "Please enter valid numbers in both fields.";
        }
        // Check if only the first field is empty
        else if (isNaN(num1)) {
            result = "Please enter a valid number in the first field.";
        }
        // Check if only the second field is empty
        else if (isNaN(num2)) {
            result = "Please enter a valid number in the second field.";
        }

        else {
            const target = 100;
            const diff1 = Math.abs(target - num1);
            const diff2 = Math.abs(target - num2);

            if (diff1 === diff2) {
                result = "Both numbers are at the same level";
            }
            else if (diff1 < diff2) {
                result = "The first number is closest to 100";
            }
            else {
                result = "The second number is closest to 100";
            }
        }
    }

    // Display the result inn the result div
    document.getElementById('result').innerText = result;
}