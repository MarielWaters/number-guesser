var numToGuess = 0;
var minRange = document.getElementById('section__form--min-js');
var maxRange = document.getElementById('section__form--max-js');
var minRangeErr = document.getElementById('min-range-error-message-js');
var maxRangeErr = document.getElementById('max-range-error-message-js');
var updateBtn = document.getElementById('section__form--btn-js');
var resetBtn = document.getElementById('section__form--reset-btn-js');
var clearBtn = document.getElementById('section__form--clear-btn-js');
var challenger1 = document.getElementById('section__form--challenger1-js');
var guess1 = document.getElementById('section__form--guess1-js');
var challenger2 = document.getElementById('section__form--challenger2-js');
var guess2 = document.getElementById('section__form--guess2-js');
var submitBtn = document.getElementById('section__form--submit-btn-js');
var inputArray = [minRange, maxRange, challenger1, guess1, challenger2, guess2];

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
  // rangeErrorMsg();
  minRange.value = "";
  maxRange.value = "";
  guess1.value = "";
  guess2.value = "";
  challenger1.value = "";
  challenger2.value = "";
  clearBtn.disabled = true;
  clearErr();
  console.log('Boom!');
}

function newRange() {
  randomNum(parseInt(minRange.value), parseInt(maxRange.value));
  console.log(minRange.value, maxRange.value);
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




// function guessErrorMsg


function resetField() {
  // randomNum(parseInt(minRange.value), parseInt(maxRange.value));
  randomNum(1, 100);
  console.log(numToGuess + " new random number");
  console.log('Boom!2');
  resetBtn.disabled = true;
  clearErr();
  // clearField();
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
  challenger1Guess.innerText = guess1.value;
  challenger2Guess.innerText = guess2.value;
  clearField();
}
