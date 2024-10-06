function sumOrTriple(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);  // Triple the sum if the values are the same
    } else {
        return num1 + num2;  // Return the sum if values are different
    }
}

// Example usage
console.log(sumOrTriple(5, 5));  // Output: 30
console.log(sumOrTriple(3, 7));  // Output: 10