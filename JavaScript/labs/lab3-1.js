var age = [20, 23, 20, 18, 19, 25];

console.log(age);
age.push(30);
console.log(age);
age.unshift(45);
console.log(age);

age[0] = 33;
console.log(age);
age.splice(2,1);
console.log(age);
age.splice(0,3);
console.log(age);

console.log(age.sort());