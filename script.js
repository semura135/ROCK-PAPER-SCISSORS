let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors'); 

// Main logic

//computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    if (randomNumber === 0) {
        return 'rock';
    } else if(randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());


function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        if (
             (humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore ++;
            resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
  checkWinner();
}



function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "🎉 You won the game!";
    } else {
      resultDiv.textContent = "💻 Computer won the game!";
    }

    // Disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
        



