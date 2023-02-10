function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInd = Math.floor(Math.random()*choices.length)
    return choices[randomInd]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
        return "It's a tie!"
    if(playerSelection == 'rock' && computerSelection == 'paper')
        return "You Lose! Paper beats Rock"
    if(playerSelection == 'rock' && computerSelection == 'scissors')
        return "You Win! Rock beats Scissors"
    if(playerSelection == 'paper' && computerSelection == 'scissors')
        return "You Lose! Scissors beat Paper"
    if(playerSelection == 'paper' && computerSelection == 'rock')
        return "You Win! Paper beats Rock"
    if(playerSelection == 'scissors' && computerSelection == 'rock')
        return "You Lose! Rock beats Scissors"
    if(playerSelection == 'scissors' && computerSelection == 'paper')
        return "You Win! Scissors beat Paper"
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice")
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection.toLocaleLowerCase(), computerSelection))
    }
}

game()


