

// Function makes the computer generate either rock, paper, or scissors
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function that plays a single round of the game against the computer
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It is a tie! Rock against rock"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You loose! Paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It is a tie! Paper against paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You loose! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It is a tie! Scissors against scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You loose! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper"
    }
}

const playerSelection = prompt("Please enter:");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
 
