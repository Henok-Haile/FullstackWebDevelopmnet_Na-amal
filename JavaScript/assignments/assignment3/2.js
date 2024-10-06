// This function is a game to guess a number between 1 and 10 only

function playGame() {
    // Generate a rando number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Prompt the user to guess the number

    let userGussedNumber = prompt('Guess a number between 1 and 10: ');

    // Check if the input is empty, cancelled, or not a number
    if (userGussedNumber === null || userGussedNumber.trim() === '') {
        alert('You did not enter anything. Please enter a number.');
    }
    else if (isNaN(userGussedNumber)) {
        alert('Invaild input! Please enter a valid number.')
    }
    else {
        // convert the input to a number
        userGussedNumber = parseInt(userGussedNumber);

        // Check if the number is within the valid range (1 to 10)
        if (userGussedNumber < 1 || userGussedNumber > 10) {
            alert('Please enter a number between 1 and 10');
        }
        else {
            // Cheeck if the user's guess is correct
            if (userGussedNumber === randomNumber) {
                // alert('Good Work! You guessed the right number.');
                alert('Good Work');
            }
            else {
                // alert(`sorry, ${randomNumber} was the correct number.`);
                alert('Not matched')
            }
        }
    }
}