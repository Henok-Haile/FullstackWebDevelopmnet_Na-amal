function closestToHundred(num1, num2) {

    const target = 100;
    const diff1 = Math.abs(target - num1);
    const diff2 = Math.abs(target - num2);

    if (diff1 === diff2) {
        console.log("Both numbers are at the same level");
    }
    else if (diff1 < diff2) {
        console.log("The first number is closest to 100");
    }
    else {
        console.log("The second number is closest to 100");
    }
}

closestToHundred(30, 40);
closestToHundred(40, 40);
closestToHundred(70, 50);
closestToHundred(95, 105);