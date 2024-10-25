function printWith1SDelay(strings){
    strings.forEach((str, index) => {
        setTimeout(() => {
            console.log(str);}, index * 1000);
    });
}

const messages = ["Thank", "you", "for", "grading", "my", "assignment"];

printWith1SDelay(messages);