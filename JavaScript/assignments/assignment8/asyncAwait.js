function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedPrint(strings) {
    for (const str of strings) {
        console.log(str);
        await delay(1000);
    }
}

const messages = ["Thank", "you", "for", "grading", "my", "assignment"];
delayedPrint(messages);

// delay is a helper function that returns a Promise that resolves after a specified time (ms milliseconds).
// delayedPrint is now an async function that uses a for...of loop to print each word with a 1-second delay.
// This approach is useful if you need more control over the sequence of asynchronous actions.