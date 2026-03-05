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

function getUserChoice(event) {
    let playerChoice;
    switch (event.target.id) {
        case 'rock-text':
        case 'rock-image':
            playerChoice = 'rock';
            break;
        case 'paper-text':
        case 'paper-image':
            playerChoice = 'paper';
            break;
        case 'scissors-text':
        case 'scissors-image':
            playerChoice = 'scissors';
            break;
    }
    return playerChoice;
}

/* Declare a function that simulates 5 rounds of Rock, Paper, Scissors between the computer
and the user. */

function playGame(event) {
    // Initialize a variable to store the user's score.
    let userScore = 0;

    // Initialize a variable to store the computer's score.
    let computerScore = 0;

    // Initialize a variable to keep track of the rounds.
    let round = 0;

    playRound(getUserChoice(event), getComputerChoice(), round);

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

        showRoundResult(userChoice, comChoice, result);
        /*
        // Use recursion to call the function 5 times instead of a loop.
        if (round < 5) {
            playRound(getUserChoice(), getComputerChoice(), round)
        }
        // Display the result of all the rounds in the console.
        else {
            console.log(`The computer's score is ${computerScore}.`)
            console.log(`Your score is ${userScore}.`)
        }
            */
    }
    
    // Declare a function to show the result of the round and update the score if needed.
    function showRoundResult(userChoice, comChoice, result) {
        // Display a message that shows the result of the round and increment the winner's score.
        const message = document.querySelector('#message');
        if (result === 'u_won') {
            message.textContent =  `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${comChoice}.`;
            const userScore = document.querySelector('#player-score');
            const score = +userScore.textContent;
            userScore.textContent = score + 1;
        }
        else if (result === 'c_won') {
            message.textContent =  `You lose! ${comChoice.charAt(0).toUpperCase() + comChoice.slice(1)} beats ${userChoice}.`;
            const computerScore = document.querySelector('#computer-score');
            const score = +computerScore.textContent;
            computerScore.textContent = score + 1;
        }
        else {
            message.textContent = `It's a tie.`;
        }
    }
}

const choiceCards = document.querySelector('.player-cards');
choiceCards.addEventListener('click', playGame);