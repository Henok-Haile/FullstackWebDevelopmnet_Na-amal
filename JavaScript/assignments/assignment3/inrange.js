function isInRange(num1, num2) {
    // Checks if either number falls in the range 50..99 (inclusive)
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isInRange(30, 30)) // output: false
console.log(isInRange(70, 30));  // Output: true
console.log(isInRange(34, 100)); // Output: false
console.log(isInRange(60, 95));  // Output: true
console.log(isInRange(49, 101)); // Output: false