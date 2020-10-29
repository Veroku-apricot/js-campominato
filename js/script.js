// Variables
var bombNumbers = [];
var guessed = [];

// Generate 16 unique random numbers from 1 to 100
for (var i = 0; i < 16; i++){
  var bomb = generateNumber(100);
  if (bombNumbers.includes(bomb)) {
    i--;
  }
  else {
    bombNumbers.push(bomb);
  }
}
console.log("Bomb numbers: ", bombNumbers);

// Ask a number from 1 to 100.
for (var i = 0; i < 84; i++) {
  var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
  guessed.push(guess);
  // If the inputted number is among the numbers generated earlier, the user loses, if not, continue asking numbers.
  if (bombNumbers.includes(guess)) {
    //User's total score
    console.log('You lose, score: ', guessed.length - 1);
    break;
  }
  else if (guessed.length === 84){
    console.log('You win, score: ', guessed.length);
  }
}
console.log("Guessed numbers: ", guessed);


// Functions
function generateNumber(max) {
  return Math.ceil(Math.random() * max);
}
