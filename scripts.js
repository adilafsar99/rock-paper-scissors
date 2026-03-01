// Initialize a variable to store the user's score.
let userScore = 0;

// Initialize a variable to store the computer's score.
let computerScore = 0;


// Declare a function to randomly generate and return the computer's choice.

function getComputerChoice() {
    // Declare a variable named comChoiceNum to store a number to select the computer's choice.
    let comChoiceNum;
    // Declare a variable named comChoice to store the  computer's choice.
    let comChoice = '';

    // Generate a random whole number between 0 & 2 and store it inside the variable comChoiceNum.
    comChoiceNum = Math.floor((Math.random() * 3));

    // Compare the value of comChoiceNum with 0 and 1 to determine the value of comChoice.
    if (comChoiceNum === 0) {
        comChoice = 'rock';
    }
    else if (comChoiceNum === 1) {
        comChoice = 'paper';
    }
    else {
        comChoice = 'scissors';
    }
    return comChoice;
}

console.log(getComputerChoice());

// Declare a function to prompt the user to enter their choice and return it.

function getUserChoice() {
    // Prompt the user to enter their choice and store it inside the variable userChoice
    let userChoice = prompt('Enter your choice: ', '');

    // Convert the value inside userChoice to lower case to remove case related errors
    userChoice = userChoice.toLowerCase()
    return userChoice;
}

console.log(getUserChoice());
