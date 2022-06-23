// Main Variables
const buttons = document.querySelectorAll(".button");
const playerScoreDisplayed = document.getElementById("playerScore");
const computerScoreDisplayed = document.getElementById("computerScore");
const gameResults = document.querySelector(".gameResults");
const endResults = document.querySelector(".endResults")
let computerScore = 0;
let playerScore = 0;
let playerSelection;

// Hides End Results
endResults.style.visibility= "hidden";

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
    return "It's a Tie!\nYou both chose Rock!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "You Lose!\nPaper Beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You Win!\nRock Beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie!\nYou both chose Paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "You Lose!\nScissors Beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You Win!\nPaper Beats Rock!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a Tie!\nYou both chose Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "You Lose!\nRock Beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You Win!\nScissors Beats Paper!";
  } else {
    return "Invalid Input";
  }
}

function getPlayerSelection(e) {
  playerSelection = e.target.alt;
  gameResults.innerText = playRound(playerSelection, computerPlay());
  compareScores()
}

function compareScores() {
  playerScoreDisplayed.textContent = `Your Score: ${playerScore}`;
  computerScoreDisplayed.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.removeEventListener("click", getPlayerSelection);
    });
    gameResults.innerText = `Final Score\n\nYour score is: ${playerScore}\nComputer Score is: ${computerScore}`
    endResults.style.visibility= "visible";
    if (playerScore > computerScore) {
      endResults.textContent = 'VICTORY!'
    } else {
      endResults.textContent = 'DEFEAT!'
    }
}
}

// Listens for button click, and applies button.id value to playerSelection
buttons.forEach((button) => {
  button.addEventListener("click", getPlayerSelection);
});

function playAgain() {

}


