/* Declare a function to randomly generate and return the computer's choice. */

function getComputerChoice() {
    // Declare a variable named comChoiceNum to store a number to select the computer's choice.
    let comChoiceNum;
    // Declare a variable named comChoice to store the  computer's choice.
    let comChoice = '';

    // Generate a random whole number between 0 & 2 and store it inside the variable comChoiceNum.
    comChoiceNum = Math.floor((Math.random() * 3));

    // Compare the value of comChoiceNum with 0 and 1 to determine the value of comChoice
    if (comChoiceNum === 0) {
        comChoice = 'Rock';
    }
    else if (comChoiceNum === 1) {
        comChoice = 'Paper';
    }
    else {
        comChoice = 'Scissors';
    }
    return comChoice;
}

console.log(getComputerChoice());

/* Declare a function named getUserChoice to prompt the user to enter their choice and
return it. */

// Declare a variable named userChoice to store user input.
// Prompt the user to enter their choice and convert it into lower case.
// Store the lower case input into userChoice.

/* Retrieve the value of userChoice from the function */