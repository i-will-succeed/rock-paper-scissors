// Main Variables
const buttons = document.querySelectorAll(".button");
const computerSelection = computerPlay().toLowerCase();
const gameResults = document.querySelector('.gameResults');

const playerScoreDisplayed = document.getElementById('playerScore')
const computerScoreDisplayed = document.getElementById('computerScore');

const begin = document.querySelector('.beginText')


let computerScore = 0;
let playerScore = 0;

// Listens for button click, and applies button.id value to playerSelection
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // begin.textContent = '';
    gameResults.textContent = (playRound(button.id, computerSelection));
    playerScoreDisplayed.style.cssText = 'background-color: blueviolet';
    computerScoreDisplayed.style.cssText = 'background-color: blueviolet'; 
    playerScoreDisplayed.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplayed.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      gameResults.textContent = `Final SCORE:\nYour score is: ${playerScore}, Computer Score is: ${computerScore}`
      return
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
