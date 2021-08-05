'use strict';

// First Solution
//==================
// let rollDice = 0;
// let currentScore0 = 0;
// let currentScore1 = 0;
// let score0 = 0;
// let score1 = 0;
// let isActivePlayer0;
// let isActivePlayer1;
// const scorePLayer0El = document.getElementById('score--0');
// const scorePLayer1El = document.getElementById('score--1');
// const currentScore0El = document.getElementById('current--0');
// const currentScore1El = document.getElementById('current--1');

// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// const diceImg = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// scorePLayer0El.textContent = 0;
// scorePLayer1El.textContent = 0;
// diceImg.classList.add('hidden');

// btnRoll.addEventListener('click', function () {
//   //Random Dice
//   rollDice = Math.trunc(Math.random() * 6 + 1);
//   diceImg.src = `dice-${rollDice}.png`;
//   diceImg.classList.remove('hidden');
//   isActivePlayer0 = player0.classList.contains('player--active');
//   isActivePlayer1 = player1.classList.contains('player--active');

//   if (rollDice !== 1) {
//     if (isActivePlayer0) {
//       currentScore0 += rollDice;
//       score0 = currentScore0;
//       currentScore0El.textContent = currentScore0;
//       console.log('Roll Score 0 : ' + score0);
//     } else if (isActivePlayer1) {
//       currentScore1 += rollDice;
//       score1 = currentScore1;
//       currentScore1El.textContent = currentScore1;
//       console.log('Roll Score 1 : ' + score1);
//     }
//   } else {
//     if (isActivePlayer0) {
//       currentScore0 = 0;
//       currentScore0El.textContent = 0;
//       player0.classList.remove('player--active');
//       player1.classList.add('player--active');
//     } else if (isActivePlayer1) {
//       currentScore1 = 0;
//       currentScore1El.textContent = 0;
//       player0.classList.add('player--active');
//       player1.classList.remove('player--active');
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   //   console.log('score0 => ' + score0);
//   //   console.log('score1 => ' + score1);
//   if (score0 < 10 && score1 < 10) {
//     isActivePlayer0 = player0.classList.contains('player--active');
//     if (isActivePlayer0) {
//       scorePLayer0El.textContent = score0;
//       currentScore0 += currentScore0;
//       currentScore0El.textContent = currentScore0;
//       player0.classList.remove('player--active');
//       player1.classList.add('player--active');
//       currentScore0 = 0;
//     } else {
//       scorePLayer1El.textContent = score1;
//       currentScore1 += currentScore1;
//       currentScore1El.textContent = currentScore1;
//       currentScore1 = 0;

//       player0.classList.add('player--active');
//       player1.classList.remove('player--active');
//     }
//   } else {
//     if (score0 >= 10) {
//       player0.classList.add('player--winner');
//       scorePLayer0El.textContent = score0;
//       currentScore0 = 0;
//       currentScore0El.textContent = currentScore0;
//     } else if (score1 >= 10) {
//       player1.classList.add('player--winner');
//       scorePLayer1El.textContent = score1;
//       currentScore1 = 0;
//       currentScore1El.textContent = currentScore1;
//     }
//   }
//   //   console.log('Hold score0 => ' + score0);
//   //   console.log('Hold score1 => ' + score1);
// });

// btnNew.addEventListener('click', function () {
//   currentScore0 = 0;
//   currentScore1 = 0;
//   score0 = 0;
//   score1 = 0;
//   scorePLayer0El.textContent = 0;
//   scorePLayer1El.textContent = 0;
//   currentScore0El.textContent = 0;
//   currentScore1El.textContent = 0;
//   diceImg.classList.add('hidden');
//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
// });

// Second Solution
//==================
// TODO:
// 1. Roll Dice Button DONE:
// # Show dice DONE:
// # Create Random Dice Number DONE:
// # Add dice iamge according to dice number DONE:
// # Add Dice number to current score DONE:
// # Somme dice number on current score DONE:
// # dice number = 1 => Reset current score DONE:
//   && switch player DONE:

// 2. Hold Button
// # save curent score to score player DONE:
// # switch player DONE:
// # add winner player if score > 100 DONE:

// 3. New Game Button (reset game) DONE:
// # create function init() DONE:
// # reset all variables DONE:

// Declare variables
let score = [0, 0];
let currentScore = 0;
let player = 0;
let gameOver = false;
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let playerScore;
let currentScoreEl;
let winnerPlayer;
//1. Roll Dice Button
btnRoll.addEventListener('click', function () {
  if (!gameOver) {
    dice.classList.remove('hidden');
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceNumber}.png`;

    currentScoreEl = document.getElementById(`current--${player}`);

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      currentScoreEl.textContent = currentScore;
      score[player] = currentScore;
    } else {
      currentScore = 0;
      currentScoreEl.textContent = 0;
      switchToggle(player);
    }
  }
});

function switchToggle() {
  player = player === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnHold.addEventListener('click', function () {
  if (!gameOver) {
    playerScore = document.getElementById(`score--${player}`);
    currentScoreEl = document.getElementById(`current--${player}`);
    if (score[player] < 10) {
      console.log(`score[${player}] = ` + score[player]);
      playerScore.textContent = score[player];
      currentScore = 0;
      currentScoreEl.textContent = 0;
      switchToggle();
    } else {
      console.log(`WInner 🏆 score[${player}] = ` + score[player]);
      playerScore.textContent = score[player];
      winnerPlayer = document.querySelector(`.player--${player}`);
      winnerPlayer.classList.add('player--winner');
      gameOver = true;
    }
  }
});
const init = function () {
  winnerPlayer = document.querySelector(`.player--${player}`);
  playerScore = document.getElementById(`score--${player}`);
  currentScoreEl = document.getElementById(`current--${player}`);
  winnerPlayer.classList.remove('player--winner');
  playerScore.textContent = 0;
  currentScoreEl.textContent = 0;
  score = [0, 0];
  currentScore = 0;
  gameOver = false;
  switchToggle();
};
btnNew.addEventListener('click', init);
