//on page load, i want to generate a random numer. use math.random and math.floor or math.ceiling to generate a random whole number
//assign the random number to a variable so that we can change the variable when the user changes range
//add event listener to submit button, when submitted, we need to PULL value from input fields and pass those values through our function that we just made to generate a new number, that new range will have to be stored in a variable

var numToGuess = 0

function randomNum(min, max) {
  numToGuess = Math.ceil(Math.random() * (max - min) + min);
  // console.log(numToGuess);
}

randomNum(1, 100);
console.log(numToGuess)

var updateButton = document.getElementById('section__form--btn-js');

updateButton.addEventListener('click', function() {
  var minRange = document.getElementById('section__form--min-js').value;
  var maxRange = document.getElementById('section__form--max-js').value;
  randomNum(minRange, maxRange);
  console.log(numToGuess);
})