function checkPalindrome() {

    // Get the input string from the text field
    const string = document.getElementById('inputString').value;

    // Find the length of a string
    const len = string.length;

    // Loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // Check if the first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            document.getElementById('result').innerHTML = `<p class="not-palindrome">${string} is NOT a palindrome</p>`;
                    return;
        }
    }

     // If the loop completes, it means the string is a palindrome
     document.getElementById('result').innerHTML = `<p class="palindrome">${string} is a palindrome</p>`;

}