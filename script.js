console.log('hello world!');
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

function getHumanChoice(){
    let humanChoice = prompt("please enter rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock') {
        return 'rock';
    } else if (humanChoice === 'paper') {
     return 'paper';
    } else if (humanChoice === 'scissors') {
        return 'scissors';
    } else {
        return 'invalid choice';
    }
}
    console.log(getHumanChoice());

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();
        if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log('You win! Rock beats Scissors!');
            humanScore++;
        } else if(humanChoice == 'rock' && computerChoice == 'paper') {
            console.log('You lose! Paper beats Rock!');
            computerScore++;
        } else if(humanChoice == 'paper' && computerChoice == 'rock') {
            console.log('You win! Paper beats Rock!');
            humanScore++;
        } else if(humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log('You lose! Scissors beats Paper!');
            computerScore++;
        } else if(humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log('You win! Scissors beats Paper!');
            humanScore++;
        } else if(humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else {
        console.log("Invalid input — no points given.");
        }
    }




function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
playGame();

console.log("Final Scores:", "You:", humanScore, "Computer:", computerScore);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("The computer won the game!");
} else {
    console.log("It is a tie");
}


