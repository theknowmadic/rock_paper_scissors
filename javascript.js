// Variables
let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')


// Function makes the computer generate either rock, paper, or scissors
const computerPlay = () => {
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
            // DOM elements p
            const p = document.createElement('p')
            p.innerText = `It is a tie! Rock against rock`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            compScore++
            const p = document.createElement('p')
            p.innerText = `You loose! Paper beats rock`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
            const p = document.createElement('p')
            p.innerText = `You win! Rock beats scissors`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            const p = document.createElement('p')
            p.innerText = `It is a tie! Paper against paper`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
            const p = document.createElement('p')
            p.innerText = `You win! Paper beats rock`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            compScore++
            const p = document.createElement('p')
            p.innerText = `You loose! Scissors beats paper`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "It is a tie! Scissors against scissors"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            compScore++
            const p = document.createElement('p')
            p.innerText = `You loose! Rock beats scissors`
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            const p = document.createElement('p')
            p.innerText = `You win! Scissors beat paper`
            outcomeDiv.appendChild(p)
        } 

    } 

// Checking for score
const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5 ) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore}! Lovely!`
        outcomeDiv.appendChild(h2)
    }
    
    if (compScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `Unfortunately you lost ${playerScore} to ${compScore}. Better luck next time!`
        outcomeDiv.appendChild(h2)
    }
}

// EventListeners
rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
})

// Function with a for-loop running the game 5 times
//const game = () => {
//    for (let i = 1; i < 6; i++) {
//        const playerSelection = prompt("Please Choose: ", "Rock, Paper, or Scissors").toLowerCase()
//        const computerSelection = getComputerChoice();
//        console.log(i, playRound(playerSelection, computerSelection))
//    }

// Conditional to determine who won
//if (playerScore > compScore) {
//    return "You beat the computer!"
//} else if (playerScore < compScore) {
//    return "You got beat!"
//} else {
//    return "You got tied!"
//    }
//}

//console.log(game())