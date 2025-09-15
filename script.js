"use strict";

const messageEl = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const scoreText = document.querySelector(".score");
const highscoreText = document.querySelector(".highscore");

const displayMessage = function (message) {
  messageEl.textContent = message;
};

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessInput.value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too low!");
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreText.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomNumber();
  displayMessage("Start guessing...");
  scoreText.textContent = score;
  number.textContent = "?";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  guessInput.value = "";
});
