// const store = new Map([
//     ['t-shirt', 20],
//     ['jeans', 30],
//     ['socks', 10],
//     ['underwear', 50],
// ]);

// let shoppingCArt = 0;

// shoppingCArt += store.get("t-shirt");
// shoppingCArt += store.get("underwear");

// console.log(shoppingCArt)
// store.set("hat", 40);
// store.delete('hat');
// console.log(store.has('hat'));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));

//array.map() = executes a provided callback function 
//              once for each array element AND
//              creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// squares.forEach(print)
// cubes.forEach(print)

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }

//array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print)

// function checkAge(element){
//     return element >= 18;
// };

// function print(element){
//     console.log(element);
// };

//array.reduce() = reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element){
//     return total + element;
// }

// destructuring = extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring
//                  5 examples

// ------------- Example 1 --------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// ------------- Example 2 --------------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// ------------- Example 3 --------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...restColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(restColors);

// ------------- Example 4 --------------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// };

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// };

// const {firstName, lastName, age, job='Unemployed'} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ------------- Example 5 --------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job='Unemployed'}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
};

displayPerson(person2);