// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function() {}


// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)


// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions

// let userName = "Bro";
// let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $" + total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

// let text =
// `Hello ${userName}
// You have ${items} items in your cart
// Your total is $${total}
// `

// // console.log(text)
// document.getElementById("myLabel").innerHTML = text;

// spread operator = allows an iterable such as an
//                   array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)

// let userName = "Bro Code";
// console.log(...userName);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(...numbers);

// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["Teddy", "Sahle", "Senay"];
// let class2 = ["Filimon", "Henok", "Finan"];

// class1.push(...class2);
// console.log(class1);

// fucntion expression = function without a name (anonymous function)
//                      avoid polluting the global scope with
//                      wwrite it, then forget about it

// const greeting = function(){
//     console.log("Hello!");
// }

// greeting();

let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}



// function increaseCount(){
//     count+=1;
//     document.getElementById('myLabel').innerHTML = count;
// }

// function decreaseCount(){
//     count-=1;
//     document.getElementById('myLabel').innerHTML = count;
// }

// arrow function = compact alternative to a traditional function expression
//     ->

// const percent = function(x,y){
//     return x/y*100;
// }
// const percent = (x,y) => x/y*100;

// console.log(`${percent(37,50)}%`);


// let grades = [100, 50, 90, 68, 88, 70];
// grades.sort(descending);
// grades.forEach(print);

// function descending(x,y){
//     return y-x;
// }
// function print(element){
//     console.log(element);
// }

// let grades = [100, 50, 90, 68, 88, 70];
// grades.sort((x,y) => y-x);
// grades.forEach((element) => console.log(element));