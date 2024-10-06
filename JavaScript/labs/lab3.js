var person = {
    name: 'Edom',
    age: 20,
    greet: function() {
        console.log('Edom says hi!')
    }
};

console.log(person);
console.log(person.name);
person.age = 12;
console.log(person.age);
person.studentNo = '23';
console.log(person);
delete person.studentNo;
console.log(person);
person.greet();