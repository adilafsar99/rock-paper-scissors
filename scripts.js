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

// Declare a function to prompt the user to enter their choice and return it.

function getUserChoice() {
    // Prompt the user to enter their choice and store it inside the variable userChoice
    let userChoice = prompt('Enter your choice: ', '');

    // Convert the value inside userChoice to lower case to remove case related errors
    userChoice = userChoice.toLowerCase()
    return userChoice;
}

/* Declare a function that simulates 5 rounds of Rock, Paper, Scissors between the computer
and the user. */

function playGame() {
    // Initialize a variable to store the user's score.
    let userScore = 0;

    // Initialize a variable to store the computer's score.
    let computerScore = 0;

    // Initialize a variable to keep track of the rounds.
    let round = 0;

    playRound(getUserChoice(), getComputerChoice(), round);

    // Declare a function that takes the user and computer's choice and simulates a round.

    function playRound(userChoice, comChoice, round) {
        // Increase the round count by 1.
        round += 1;
        
        // Declare a variable to store the result of the round.
        let result = '';

        // Compare every possible value of userChoice and comChoice and store the result.
        // Check if there is a tie.
        if (comChoice === userChoice) {
            result = 'tie';
        }
        else if (comChoice === 'rock') {
            if (userChoice === 'paper') {
                result = 'u_won'
            }
            else {
                result = 'c_won'
            }
        }
        else if (comChoice === 'paper') {
            if (userChoice === 'scissors') {
                result = 'u_won'
            }
            else {
                result = 'c_won'
            }
        }
        else {
            if (userChoice === 'rock') {
                result = 'u_won'
            }
            else {
                result = 'c_won'
            }
        }

        // Call the logRoundResult() function with the result arguement to log the result of the round.
        logRoundResult(userChoice, comChoice, result);

        // Use recursion to call the function 5 times instead of a loop.
        if (round < 5) {
            playRound(getUserChoice(), getComputerChoice(), round)
        }
        // Display the result of all the rounds in the console.
        else {
            console.log(`The computer's score is ${computerScore}.`)
            console.log(`Your score is ${userScore}.`)
        }
    }
    
    // Declare a function to log the result of the round to the console and update the score if needed.
    function logRoundResult(userChoice, comChoice, result) {
        // Display a message in the console that shows the result of the round and increment the winner's score.
        if (result === 'u_won') {
            console.log(`You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${comChoice}.`)
            userScore += 1;
        }
        else if (result === 'c_won') {
            console.log(`You lose! ${comChoice.charAt(0).toUpperCase() + comChoice.slice(1)} beats ${userChoice}.`)
            computerScore += 1;
        }
        else {
            console.log('Its a tie!')
        }
    }
}

playGame();



