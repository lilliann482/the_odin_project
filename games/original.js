let getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let computerPlay = function(){
    let outputSelection = getRandomInt(3);
    let selectionArray = ['rock', 'paper', 'scissors']
    let computerSelection = selectionArray[outputSelection];
    return computerSelection;
} 


let playerPlay = function() {
    let playerSelection = prompt('Rock, paper, or scissors?', '');
    return playerSelection;
}

let computerScore = 0;
let playerScore = 0;

function showScore() {
    console.log('My score is: ' + computerScore);
    console.log('Your score is: ' + playerScore);
}



function playRound() {
    let a = playerPlay();
    let b = computerPlay(3);
    console.log('You chose: ' + a);
    console.log('I chose: ' + b);

    if (a === b) {
        console.log('It\'s a tie!');
    } else if (a == 'rock' && b == 'paper') {
        console.log('Paper beats rock, I win!');
        computerScore++;
    } else if (a == 'rock' && b == 'scissors'){
        console.log('Rock beats scissors, you win!');
        playerScore++;
    } else if (a == 'paper' && b == 'rock') {
        console.log('Paper beats rock, you win!');
        playerScore++;
    } else if (a == 'paper' && b == 'scissors') {
        console.log('Scissors beats paper, I win');
        computerScore++;
    } else if (a == 'scissors' && b == 'rock') {
        console.log('Rock beats scissors, I win!');
        computerScore++;
    } else if (a == 'scissors' && b == 'paper') {
        console.log('Scissors beats paper, you win!');
        playerScore++;
    } else {
        console.log('Whoops, you missed one');
    }


    showScore();
    
    
}


function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore < computerScore) {
        console.log('I win, but good game!');
    } else {
        console.log('You win, good game!')
    }
}

playGame();