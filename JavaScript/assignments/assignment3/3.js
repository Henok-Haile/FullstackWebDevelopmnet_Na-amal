function checkRange() {
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

    // Checks if either number falls in the range 50..99 (inclusive)
    else {
        if ((num1 >= 50 && num1 <= 99) && (num2 >= 50 && num2 <= 99)) {
            result = "True: Both numbers are in the range 50..99.";
        }
        else if (num1 >= 50 && num1 <= 99) {
            result = "True: At least the first number is in the range 50..99.";
        }
        else if (num2 >= 50 && num2 <= 99) {
            result = "True: At least the first number is in the range 50..99.";
        }
        else {
            result = "False: Neither number is in the range 50..99.";
        }
    }
   }

    // Display the result inn the result div
    document.getElementById('result').innerText = result;
}