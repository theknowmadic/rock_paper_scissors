let playerScore = 0
let compScore = 0

// Function makes the computer generate either rock, paper, or scissors
const getComputerChoice = () => {
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
    const playRound = (playerSelection, computerSelection) => {

        if (playerSelection === "rock" && computerSelection === "rock") {
            return "It is a tie! Rock against rock"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            compScore++
            return "You loose! Paper beats rock"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
            return "You win! Rock beats scissors"
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "It is a tie! Paper against paper"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
            return "You win! Paper beats rock"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            compScore++
            return "You loose! Scissors beats paper"
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "It is a tie! Scissors against scissors"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            compScore++
            return "You loose! Rock beats scissors"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            return "You win! Scissors beat paper"
        } 

    } 
 

// Function with a for-loop running the game 5 times
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please Choose: ", "Rock, Paper, or Scissors").toLowerCase()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }

// Conditional to determine who won
if (playerScore > compScore) {
    return "You beat the computer!"
} else if (playerScore < compScore) {
    return "You got beat!"
} else {
    return "You got tied!"
    }
}

console.log(game())