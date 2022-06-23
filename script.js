// Main Variables
const buttons = document.querySelectorAll(".button");
const playerScoreDisplayed = document.getElementById("playerScore");
const computerScoreDisplayed = document.getElementById("computerScore");
const gameResults = document.querySelector(".gameResults");
const endResults = document.querySelector(".endResults");
const playAgainButton = document.querySelector(".playAgain")

// Modal Variables
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const continuePlaying = document.querySelector('.continue');

// Game Variables
let computerScore = 0;
let playerScore = 0;
let playerSelection;

// Hides End Results
endResults.style.visibility = "hidden";
playAgainButton.style.visibility = 'hidden';

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
    return "It's a Tie!\n\nYou both chose Rock!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "You Lose!\n\nComputer chose Paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You Win!\n\nComputer chose Scissors";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie!\n\nYou both chose Paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "You Lose!\n\nComputer chose Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You Win!\n\nComputer chose Rock";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a Tie!\n\nYou both chose Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "You Lose!\n\nComputer chose Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You Win!\n\nComputer chose Paper";
  } else {
    return "Invalid Input";
  }
}

function getPlayerSelection(e) {
  playerSelection = e.target.alt;
  gameResults.innerText = playRound(playerSelection, computerPlay());
  compareScores();
}

function compareScores() {
  playerScoreDisplayed.textContent = `Your Score: ${playerScore}`;
  computerScoreDisplayed.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.removeEventListener("click", getPlayerSelection);
    });
    gameResults.innerText = `Final Score\n\nYour score is: ${playerScore}\nComputer Score is: ${computerScore}`;
    endResults.style.visibility = "visible";
    playAgain();
    if (playerScore > computerScore) {
      endResults.textContent = "VICTORY!";
    } else {
      endResults.textContent = "DEFEAT!";
    }
  }
}

function playAgain() {
  modal.showModal();
  closeModal.addEventListener('click', () => {
    modal.close();
    playAgainButton.style.visibility = 'visible';
    playAgainButton.addEventListener('click', () => {
      window.location.reload();
    })
  })
  continuePlaying.addEventListener('click', () => {
    modal.close();
    window.location.reload();
  })
}

// Listens for button click, and gets playerSelection from button.target.alt
buttons.forEach((button) => {
  button.addEventListener("click", getPlayerSelection);
});
