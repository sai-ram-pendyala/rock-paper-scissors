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

function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const res = playRound(playerSelection, computerSelection);
    const resTag = document.querySelector('#result');
    resTag.textContent = res;
}

let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', game));
