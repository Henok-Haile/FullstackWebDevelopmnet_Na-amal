function removeFL(str){
    if (str.length > 2) {
        return str.slice(1,-1);
    }
    else {
        return 'TO remeove first and last character string must has at least three characters'
    } 
}

// const inputString = "DT";
// const inputString = "DOT";
const inputString = "DOT Ethiopia";
const modifiedString = removeFL(inputString);

console.log(modifiedString);