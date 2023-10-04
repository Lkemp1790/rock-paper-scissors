const selections = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return selections[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    // Convert selections to lower case
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    let result = ""
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    }

    else if(
       (playerChoice === 'rock' && computerChoice === 'scissors') ||
       (playerChoice === 'paper' && computerChoice === 'rock') ||
       (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        result = 'You win! ' + playerChoice + ' beats ' + computerChoice;
    }

    else {result = 'you lose ' + computerChoice + ' beats ' + playerChoice};
    document.getElementById('result').innerHTML = result;
}

function game() {

}

