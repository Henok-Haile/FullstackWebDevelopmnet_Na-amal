// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Acess a database
//                          Fetch a file
//                          Tasks that take time
//                     (start now, finish sometime later)

console.log("START");
// console.log("This step is synchronous");
setTimeout(() => console.log("This is asynchronous"), 500);
console.log("END")