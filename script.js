'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body');
const guessElement = document.querySelector('.guess');
const numberElement = document.querySelector('.number');
const highScoreElement = document.querySelector('.highscore');
const checkButtonElement = document.querySelector('.check');
const againButtonElement = document.querySelector('.again');

checkButtonElement.addEventListener('click', function () {
  const guess = +guessElement.value;

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    //   When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      displayScore(--score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

againButtonElement.addEventListener('click', function () {
  secretNumber = generateSecretNumber();
  score = 20;

  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  guessElement.value = '';

  bodyElement.attributeStyleMap.clear();
  numberElement.attributeStyleMap.clear();
});

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function displayMessage(message) {
  messageElement.textContent = message;
}

function displayScore(score) {
  scoreElement.textContent = score;
}

function displayNumber(number) {
  numberElement.textContent = number;
}
