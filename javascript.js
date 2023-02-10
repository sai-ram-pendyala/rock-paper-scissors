function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInd = Math.floor(Math.random()*choices.length)
    return choices[randomInd]
}

console.log(getComputerChoice())