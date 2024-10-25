// Write a function that takes an object and prints
// its keys and values to the console. Use the for...
// in loop to iterate through the object properties.

function printKeysAndValues(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}


const person = {
    name: "Edum",
    age: 30,
    city: "Addis Ababa",
};

printKeysAndValues(person);