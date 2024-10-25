// Write a function that takes an array of numbers and
// returns a new array with each number doubled.
// Use the for...of loop to iterate through the array.

function doubleArray(numbers){

    const doubled = [];

    for (const number of numbers) {
        doubled.push(number * 2);
    }

    return doubled;
}

const arrayNumbers = [2, 4, 8, 16];
console.log(arrayNumbers);
const doubledArrayNumbers = doubleArray(arrayNumbers);
console.log(doubledArrayNumbers);