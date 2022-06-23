// Main Variables
const buttons = document.querySelectorAll(".button");
const gameResults = document.querySelector('.gameResults');

const playerScoreDisplayed = document.getElementById('playerScore')
const computerScoreDisplayed = document.getElementById('computerScore');



let computerScore = 0;
let playerScore = 0;

// TODO --> Figure out how to remove event listener, clean up code, instead of using button.id,'
// maybe create variable (playerSelection) from the information in event listener,
// Figure out why Score Displays are acting funny

// Listens for button click, and applies button.id value to playerSelection
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id
    const computerSelection = computerPlay().toLowerCase();

    
    gameResults.textContent = (playRound(playerSelection, computerSelection));

    // playerScoreDisplayed.style.cssText = 'background-color: blueviolet; box-shadow: rgba(138, 43, 226, 0.16) 0px 3px 6px, rgba(138, 43, 226, 0.23) 0px 3px 6px;';
    // computerScoreDisplayed.style.cssText = 'background-color: blueviolet; box-shadow: rgba(138, 43, 226, 0.16) 0px 3px 6px, rgba(138, 43, 226, 0.23) 0px 3px 6px;';   

    playerScoreDisplayed.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplayed.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      gameResults.textContent = `Final SCORE:\nYour score is: ${playerScore}, Computer Score is: ${computerScore}`
      button.removeEventListener('click', this);
    }

  })
});


// Generates random number between 0 and 2,
// and applies 'rock', 'paper', or 'scissors' to value
function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// LOGIC: Compares, keeps score, and returns result
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a Tie! You both chose Rock!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "You Lose! Paper Beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You Win! Rock Beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie! You both chose Paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "You Lose! Scissors Beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You Win! Paper Beats Rock!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a Tie! You both chose Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "You Lose! Rock Beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You Win! Scissors Beats Paper!";
  } else {
    return "Invalid Input";
  }
}


