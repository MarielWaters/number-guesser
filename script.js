//add event listener to submit button, when submitted, we need to PULL value from input fields and pass those values through our function that we just made to generate a new number, that new range will have to be stored in a variable

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


function randomNum(min, max) {
  numToGuess = Math.ceil(Math.random() * (max - min) + min);
  // console.log(numToGuess);
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
})

resetBtn.addEventListener('click', function() {
  minRange.value = "";
  maxRange.value = "";
  guess1.value = "";
  guess2.value = "";
  challenger1.value = "";
  challenger2.value = "";
  randomNum(1, 100);
  console.log(numToGuess)
})