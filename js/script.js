// Generate 16 unique random numbers from 1 to 100
var bomb = "";
for (var i = 0; i < 16; i++){
  var n = generateNumber(1, 100);
  bomb = bomb + n + " ";
}
console.log(bomb);

// Ask 84 times a number from 1 to 100. Can't repeat the same number.
var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
console.log(guess);

// If the inputted number is among the numbers generated earlier, the user loses. If not, continue asking numbers.

// At the end of the game, tell the user's total score


// Functions
function generateNumber(min, max) {
  return Math.ceil(Math.random() * (max - min));
}
