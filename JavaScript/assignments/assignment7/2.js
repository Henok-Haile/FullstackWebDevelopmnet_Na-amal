const person = { 
    name: 'Alice',
    age: 25,
    city: 'Wonderland',
};
const { name: personName, age, city } = person;

console.log(personName);  // 'Alice'
console.log(age);   // 25
console.log(city);  // 'Wonderland'