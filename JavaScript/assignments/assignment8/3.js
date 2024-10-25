// Write a function that takes an array of strings and
// prints each string to the console with a delay of 1 second between each print.
// Use setTimeout() to achieve the delay.

function delayedPrint(strings) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < strings.length){
            console.log(strings[index]);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}


const messages = ["Thank", "you", "for", "grading", "my", "assignment"];
delayedPrint(messages);

// setInterval is set to log each word every 1 second.
// clearInterval stops the interval when all words have been printed.