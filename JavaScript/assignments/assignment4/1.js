function checkLeapYear() {
    // Get the values from the input fields
    const year = parseInt(document.getElementById('year').value);

    let result;



    // Check if it is empty
    if (isNaN(year)) {
        result = "Please enter valid year";
    }

    else if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        result = year + ' is a leap year';
    }
    else {
        result = year + ' is not a leap year';
    }


    // Display the result inn the result div
    document.getElementById('result').innerText = result;
}