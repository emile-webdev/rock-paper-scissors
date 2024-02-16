// ---GLOBAL VARIABLES---
const choicesArray = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetGameBtn = document.querySelector('.game-btn');
const textDisplay = document.querySelector('.text-display'); 
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

// ---EVENT LISTENERS---
rockBtn.addEventListener('click', rock);
paperBtn.addEventListener('click', paper);
scissorsBtn.addEventListener('click', scissors);
resetGameBtn.addEventListener('click', resetGame);

// ---COMPUTER CHOICE---
function getComputerChoice() {
    const randomChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    //console.log(randomChoice);
    return(randomChoice);
}
getComputerChoice();

// ---DETERMINE ROUND WINNER---
function playRound(playerSelection, computerSelection) {
    //console.log('1 ', playerSelection, '2 ', computerSelection);
    const displayText = document.createElement('p');
    if (playerSelection === computerSelection) {
        displayText.innerText = 'Its a Draw';
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper' ||
               playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        displayText.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        displayText.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    textDisplay.appendChild(displayText);

    setTimeout(() => {
        displayText.innerText = '';
      }, "800");
}

// ---DETERMINE GAME WINNER---
const checkForWinner = (playerScore, computerScore) => {
    const printWinner = document.createElement('h2');
    if(playerScore === 5) {
        printWinner.innerText = 'Player won!, GAME OVER';
        setTimeout(() => {
            resetGame();
        }, "3000");
    } else if(computerScore === 5) {
        printWinner.innerText = 'Computer won!, GAME OVER';
        setTimeout(() => {
            resetGame();
        }, "3000");
    } 
    textDisplay.append(printWinner);

    setTimeout(() => {
        printWinner.innerText = '';
    }, "3000");
}

// ---UPDATE SCORE BOARD---
const updateScores = (playerScore, computerScore) => {
    playerScoreBoard.innerText = `${playerScore}`;
    computerScoreBoard.innerText = `${computerScore}`;
}

// ---PLAYER CHOICE FUNCTIONS---
function rock() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
}

function paper() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
}

function scissors() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
}

// ---RESET GAME FUNCTION---
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.innerText = '0';
    computerScoreBoard.innerText = '0';
    textDisplay.innerText = '';
}
