//on page load, i want to generate a random numer. use math.random and math.floor or math.ceiling to generate a random whole number
//assign the random number to a variable so that we can change the variable when the user changes range


function randomNum(min, max) {
  console.log(Math.ceil(Math.random() * (max - min) + min));
}

randomNum(1, 100);