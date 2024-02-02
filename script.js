'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//function for adding messages
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
///function for querySelector to select the html element and adding textContent
const querySelector = (seletctor, data) => {
  document.querySelector(seletctor).textContent = data;
};

document.querySelector('.check').addEventListener('click', e => {
  e.preventDefault();
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(typeof guessValue);

  if (!guessValue) {
    alert('Guess the number');
    displayMessage('No Number 😤');
  } else if (number === guessValue) {
    displayMessage(`Correct! The number is ${number}🍾🎉`);
    querySelector('.number', number);
    document.querySelector('.anim').style.display = 'block';
    console.log(number);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    /// highest score
    if (score > highscore) {
      highscore = score;
      querySelector('.highscore', highscore);
    }
  } else if (guessValue !== number) {
    if (score > 1) {
      displayMessage(
        guessValue > number ? 'Number is to High 👆' : `Number is to Low  👇`
      );
      score--;
      querySelector('.score', score);
    } else {
      displayMessage('Game is Over👎💥');
      querySelector('.score', 0);
    }
  }

  /////if you want if else  statement instead of this one, just remove it and use the below lines/////

  //   } else if (guessValue > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `Number is to High 👆`;

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `Game is Over👎💥`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guessValue < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `Number is to Low  👇`;

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `Game is Over👎💥`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  querySelector('.score', score);
  document.querySelector('.guess').value = '';
  querySelector('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
