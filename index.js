const choicesArray = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    //console.log(randomChoice);
    return(randomChoice);
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a Draw';
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper' ||
               playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make you choice: Rock, Paper or Scissors', '').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        return 'You won the game!';
    } else if(playerScore < computerScore) {
        return 'You lost the game!';
    } else {
        return 'Your game ended in a draw!';
    }
}
console.log(game());

