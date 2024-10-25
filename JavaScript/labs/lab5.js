// The for of loop = loops through the
//                   values of an iterable
//                   objects

// The for...in loop = is used to loop through
//                     an object's properties.

var arr = [43, 12, 32, 56];
for(var e of arr){
    console.log(e);
}

var obj = {a:1, b:2, c:3};
for (var prop in obj){
    console.log(`${prop}:${obj[prop]}`);
}

var arr2 = [
    {userName:'john',age:20},
    {userName:'jack',age:30},
    {userName:'sam',age:40},
]
for(var p of arr2){
    console.log(p.userName);
}