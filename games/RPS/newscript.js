
const buttons = document.querySelectorAll('button');
let scoreboard = {
    computerScore: 0,
    playerScore: 0
}

//Play Game
let play = function(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerSelection();
    let winner = getWinner(playerSelection, computerSelection);
    let score = getScore(winner);
    showScore();
    showComputerChoice(computerSelection);
    showPlayerChoice(playerSelection);

    console.log(playerSelection, computerSelection, winner, scoreboard);
}



function getComputerSelection() {
    let rand = Math.random();

    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


//Event listeners
buttons.forEach(buttons => addEventListener('click', play));

//Get game winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper'){
            return 'computer';
        } else {
            return 'player';
        }

    }else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player';
        }

    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}



function getScore(w){
    if (w === 'player') {
        scoreboard.playerScore++;
    } else if (w === 'computer') {
        scoreboard.computerScore++;
    } else {

    }
}


//Display Score
function showScore() {

    const cScore = document.querySelector('.cScore')
    cScore.textContent = scoreboard.computerScore;


    const pScore = document.querySelector('.pScore');
    pScore.textContent = scoreboard.playerScore; 

}

//Display Choices
function showComputerChoice(c) {
    const computerScore = document.getElementById('computerScore');
    const computerChoice = document.createElement('h3');

    computerChoice.textContent = c;

    computerScore.appendChild(computerChoice);
}


function showPlayerChoice(p) {
    const playerScore = document.getElementById('playerScore');
    const playerChoice = document.createElement('h3');

    playerChoice.textContent = p;

    playerScore.appendChild(playerChoice);
}




