//1. creating variables for document.querySelector for almost all classes
const message = document.querySelector(`.message`);
const guideText = document.querySelector(`.guide-text`);
const guide = document.querySelector(`.guide`);
const overlay = document.querySelector(`.overlay`);
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const reset = document.querySelector(`.reset`);
const gameRight = document.querySelector(`.game-right`);
const displayScore = function () {
  return (document.querySelector(`.score`).textContent = `${score}`);
};
//display name
const player = prompt(`Enter Your Name: `);
if (player) {
  document.querySelector(`.player`).textContent = `${player}`;
}
//let numberOfAttempts = 0;
////creating a random number
const generatRandomNumber = function () {
  return Math.floor(Math.random() * 15) + 1;
};
//adding "life" to check button

const correctNumber = generatRandomNumber();
let score = 15;
let highScore = 0;
console.log(correctNumber);

check.addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  gameRight.style.backgroundColor = "#fff";
  if (!guess) {
    message.textContent = `Not A Number`;
    gameRight.style.backgroundColor = "#FA6817";
    message.style.borderBottom = "solid 9px #111";
  } else if (guess === correctNumber) {
    number.textContent = `${guess}`;
    message.textContent = `CORRECT NUMBER`;
    message.style.borderBottom = "solid 9px #111";
    gameRight.style.backgroundColor = "#c0ff32";
  } else if (guess !== correctNumber) {
    if (score <= 0) {
      message.textContent = `You Lost`;
      gameRight.style.backgroundColor = "#de0606";
      message.style.borderBottom = "solid 9px #111";
      return;
    }
    if (guess > correctNumber) {
      score--;
      message.textContent = `TOO HIGH`;
      score.textContent = `${score}`;
      message.style.borderBottom = "solid 9px #0874F0";
      displayScore();
    } else if (guess < correctNumber) {
      score--;
      message.textContent = `TOO LOW`;
      score.textContent = `${score}`;

      message.style.borderBottom = "solid 9px #cc0000";
      displayScore();
    }
  }
});
//reset button
reset.addEventListener(`click`, function () {
  score = 15;
  document.querySelector(`.game-right`).style.backgroundColor = "#fff";
  message.textContent = `START GAME`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = `15`;
  document.querySelector(`.guess`).value = ``;
  const player = prompt(`Enter Your Name: `);
  document.querySelector(`.player`).textContent = `${player}`;
});
//guide button
guide.addEventListener(`click`, function () {
  guideText.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
});
//exit from guide
overlay.addEventListener(`click`, function () {
  guideText.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
