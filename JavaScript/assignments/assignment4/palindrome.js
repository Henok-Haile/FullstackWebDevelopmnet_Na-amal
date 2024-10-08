function checkPalindrom(string) {
    // Find the length of a string
    const len = string.length;

    // Loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // Check if the first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            console.log('It is not a palindrome');
            return;
        }
    }

    console.log('It is a palindrome')

}

checkPalindrom('madam');