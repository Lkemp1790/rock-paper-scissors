const selections = ["Rock", "Paper", "Scissors"];
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let playerScore = 0
let computerScore = 0

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
        playerScore += 1;

        if (playerScore === 5) {
            result = 'You won the game refresh the page to play again';
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }

    else {
          result = 'you lose ' + computerChoice + ' beats ' + playerChoice;
          computerScore += 1;
          
          if (computerScore === 5) {
            result = 'You lost the game refresh the page to play again';
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
          }
    };

    document.getElementById('result').innerHTML = result;
    document.getElementById('player-score').innerHTML = "Your score = " + playerScore
    document.getElementById('computer-score').innerHTML = "Computer score = " + computerScore
}

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
  });
  
  paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
  });
  
  scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
  });