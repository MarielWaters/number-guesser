var numToGuess = 0;
var minRange = document.getElementById('section__form--min-js');
var maxRange = document.getElementById('section__form--max-js');
var updateBtn = document.getElementById('section__form--btn-js');
var resetBtn = document.getElementById('section__form--reset-btn-js');
var clearBtn = document.getElementById('section__form--clear-btn-js');
var challenger1 = document.getElementById('section__form--challenger1-js');
var guess1 = document.getElementById('section__form--guess1-js');
var challenger2 = document.getElementById('section__form--challenger2-js');
var guess2 = document.getElementById('section__form--guess2-js');
var inputArray = [minRange, maxRange, challenger1, guess1, challenger2, guess2];

function randomNum(min, max) {
  numToGuess = Math.ceil(Math.random() * (max - min) + min);
}

randomNum(1, 100);
console.log(numToGuess)

updateBtn.addEventListener('click', function() {
  randomNum(minRange.value, maxRange.value);
  console.log(numToGuess);
})

clearBtn.addEventListener('click', function() {
  minRange.value = "";
  maxRange.value = "";
  guess1.value = "";
  guess2.value = "";
  clearBtn.disabled = true;
  resetBtn.disabled = true;
})

resetBtn.addEventListener('click', function() {
  minRange.value = "";
  maxRange.value = "";
  guess1.value = "";
  guess2.value = "";
  challenger1.value = "";
  challenger2.value = "";
  resetBtn.disabled = true;
  clearBtn.disabled = true;
  randomNum(1, 100);
  console.log(numToGuess);
})

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
