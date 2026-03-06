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

// Declare a function that takes the user and computer's choice and simulates a round.

function play(event) {
    let userChoice = getUserChoice(event);
    let comChoice = getComputerChoice();
    if (userScore < 5 || computerScore < 5) {
        // Declare a variable to store the result of the the game.
        let result;
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

        showResult(userChoice, comChoice, result);
    }
}

// Declare a function to show the result of the match and update the score if needed.
function showResult(userChoice, comChoice, result) {
    if (userScore < 5 && computerScore < 5) {
        switch (result) {
            case 'u_won':
                messagePara.textContent = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${comChoice}.`;
                userScore += 1;
                userScorePara.textContent = userScore;
                break;
            case 'c_won':
                messagePara.textContent = `You lose! ${comChoice.charAt(0).toUpperCase() + comChoice.slice(1)} beats ${userChoice}.`;
                computerScore += 1;
                computerScorePara.textContent = computerScore;
                break;
            case 'tie':
                messagePara.textContent = `It's a tie.`;
        }
    }
    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            messagePara.textContent = 'Congratulations! You won this game.';
        }
        if (computerScore === 5) {
            messagePara.textContent = 'Sorry! The computer won this game.';
        }
        resetBtn.classList.remove('invisible');
        resetBtn.addEventListener('click', playAgain);
    }

}

const playAgain = function () {
    userScore = 0;
    computerScore = 0;
    userScorePara.textContent = userScore;
    computerScorePara.textContent = computerScore;
    messagePara.textContent = 'Click on a card to choose and play.';
    resetBtn.classList.add('invisible');
}


const userScorePara = document.querySelector('#player-score');
let userScore = +userScorePara.textContent;
const computerScorePara = document.querySelector('#computer-score');
let computerScore = +computerScorePara.textContent;
const messagePara = document.querySelector('#message');
const resetBtn = document.querySelector('#reset-btn');
const choiceCards = document.querySelector('.player-cards');
choiceCards.addEventListener('click', play);