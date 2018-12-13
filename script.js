//Random number generated on page load
var numToGuess = 0;

//Range Queries
var minRange = document.getElementById('section__form--min-js');
var maxRange = document.getElementById('section__form--max-js');
var minRangeErr = document.getElementById('min-range-error-message-js');
var maxRangeErr = document.getElementById('max-range-error-message-js');

//Button Queries
var updateBtn = document.getElementById('section__form--btn-js');
var resetBtn = document.getElementById('section__form--reset-btn-js');
var clearBtn = document.getElementById('section__form--clear-btn-js');
var submitBtn = document.getElementById('section__form--submit-btn-js');

//Challenger Queries
var challenger1 = document.getElementById('section__form--challenger1-js');
var guess1 = document.getElementById('section__form--guess1-js');
var guessErr1 = document.getElementById('challenger1-guess-error-message-js')
var challenger2 = document.getElementById('section__form--challenger2-js');
var guess2 = document.getElementById('section__form--guess2-js');
var guessErr2 = document.getElementById('challenger2-guess-error-message-js')

//Array Query
var inputArray = [minRange, maxRange, challenger1, guess1, challenger2, guess2];

//Event Listeners
submitBtn.addEventListener('click', submitGuess);
clearBtn.addEventListener('click', clearField);
updateBtn.addEventListener('click', newRange);
resetBtn.addEventListener('click', resetField);


function randomNum(min, max) {
  numToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNum(1, 100);
console.log(numToGuess + " og number")

function clearField() {
  minRange.value = "";
  maxRange.value = "";
  guess1.value = "";
  guess2.value = "";
  challenger1.value = "";
  challenger2.value = "";
  clearBtn.disabled = true;
  clearErr();
}

function newRange() {
  randomNum(parseInt(minRange.value), parseInt(maxRange.value));
  console.log(numToGuess);
  var currentRangeMin = document.getElementById('section__current-range--min-js');
  var currentRangeMax = document.getElementById('section__current-range--max-js');
  currentRangeMin.innerText = minRange.value;
  currentRangeMax.innerText = maxRange.value;
  rangeErrorMsg();
}

function rangeErrorMsg() {
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);
  if (min >= max) {
    minRangeErr.style.visibility = 'visible';
    maxRangeErr.style.visibility = 'visible';
  }
  if (min < max) {
    minRangeErr.style.visibility = 'hidden';
    maxRangeErr.style.visibility = 'hidden';
  }
}

function clearErr() {
  minRangeErr.style.visibility = 'hidden';
  maxRangeErr.style.visibility = 'hidden';
}

function resetField() {
  randomNum(1, 100);
  console.log(numToGuess + " new random number");
  console.log('Boom!2');
  resetBtn.disabled = true;
  clearErr();
}

inputArray.forEach(function(input) {
  input.addEventListener('keyup', enableBtn)
})

function enableBtn() {
  if (guess1.value || guess2.value || challenger1.value || challenger2.value || minRange.value || maxRange.value) {
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  } else {
    clearBtn.disabled = true;
    resetBtn.disabled = true;
  }
}

function submitGuess() {
  var latestScoreContainer = document.getElementById('section__latest-score-container-js');
  var challenger1Name = document.getElementById('append-challenger1-name-js');
  var challenger2Name = document.getElementById('append-challenger2-name-js');
  var challenger1Guess = document.getElementById('section__guess-feedback-container--actual-guess1-js');
  var challenger2Guess = document.getElementById('section__guess-feedback-container--actual-guess2-js');
  latestScoreContainer.style.display = 'flex';
  challenger1Name.innerText = challenger1.value;
  challenger2Name.innerText = challenger2.value;
  var currentGuess1 = guess1.value;
  var currentGuess2 = guess2.value;
  challenger1Guess.innerText = currentGuess1;
  challenger2Guess.innerText = currentGuess2;
  guessEval();
  errDisplay(currentGuess1, currentGuess2);
  clearField();
}


function guessEval() {
  var guess1Feedback = document.getElementById('section__guess-feedback-container--accuracy1-js');
  var guess2Feedback = document.getElementById('section__guess-feedback-container--accuracy2-js');
  var one = parseInt(guess1.value);
  var two = parseInt(guess2.value);
  if (one > numToGuess) {
    guess1Feedback.innerText = "That's too high!";
    console.log("Input number too high")
  } else if (one < numToGuess) {
    guess1Feedback.innerText = "That's too low!";
    console.log("Input number too low")
  } else {
    guess1Feedback.innerText = "BOOM!";
    cardDisplay();
  }  if (two > numToGuess) {
    guess2Feedback.innerText = "That's too high!"
  }  else if (two < numToGuess) {
    guess2Feedback.innerText = "That's too low!"
  }  else {
    guess2Feedback.innerText = "BOOM!"
    cardDisplay();
  }
}

function errDisplay(one, two) {
  var currentRangeMin = document.getElementById('section__current-range--min-js');
  var currentRangeMax = document.getElementById('section__current-range--max-js');
  console.log(currentRangeMax.innerText, currentRangeMin.innerText, one, two)
  if (one > parseInt(currentRangeMax.innerText) || one < parseInt(currentRangeMin.innerText)) {
    guessErr1.style.visibility = 'visible';
    console.log(one, maxRange, 'one')
  } else if (two > parseInt(currentRangeMax.innerText) || two < parseInt(currentRangeMin.innerText)) {
    guessErr2.style.visibility = 'visible';
    console.log(two, maxRange, 'two')
  } 
}

function cardDisplay() {
  var cardContainer = document.querySelector('.winner-card__container');
  cardContainer.classList.add('new-card');
  var card = 
   `<aside class="winner-card">
      <p class="card-name"><span class="card-challenger">${challenger1.value}</span> vs <span class="card-challenger">${challenger2.value}</span></p>
      <hr class="card-line">
      <h3 class="card-challenger-winner">challenger 1</h3>
      <h3 class="card-winner">WINNER!</h3>
      <hr class="card-line">
      <img src="./assets/cancel.png" id="card-delete" alt="delete winner card">
        </aside>`;
  cardContainer.innerHTML = card + cardContainer.innerHTML;
}
