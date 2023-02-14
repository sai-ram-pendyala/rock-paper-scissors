let man = 0
let machine = 0

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInd = Math.floor(Math.random()*choices.length)
    return choices[randomInd]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
        return "It's a tie!"
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        machine += 1;
        return "You Lose! Paper beats Rock"
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors') {
        man += 1;
        return "You Win! Rock beats Scissors"
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors') {
        machine += 1;
        return "You Lose! Scissors beat Paper"
    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        man += 1;
        return "You Win! Paper beats Rock"
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock') {
        machine += 1;
        return "You Lose! Rock beats Scissors"
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper') {
        man += 1;
        return "You Win! Scissors beat Paper"
    }
}

function game(e) {
    const finalRes = document.querySelector('#final');
    finalRes.textContent = "";
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const res = playRound(playerSelection, computerSelection);
    const resTag = document.querySelector('#result');
    resTag.textContent = res;
    if(res == "It's a tie!")
        return;
    const manScore = document.querySelector('#man');
    const machineScore = document.querySelector('#machine');
    manScore.textContent = man;
    machineScore.textContent = machine;

    if(man == 5) {
        finalRes.textContent = 'You Won!!!';
        man = 0;
        machine = 0;
        manScore.textContent = man;
        machineScore.textContent = machine;
    }

    if(machine == 5) {
        finalRes.textContent = 'Robot Won!!!';
        man = 0;
        machine = 0;
        manScore.textContent = man;
        machineScore.textContent = machine;
    }
}

let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', game));
