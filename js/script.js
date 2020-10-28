// Generate 16 unique random numbers from 1 to 100
var bombNumbers = [];
for (var i = 0; i < 16; i++){
  var bomb = generateNumber(100);
  if (bombNumbers.includes(bomb)) {
    i--;
  }
  else {
    bombNumbers.push(bomb);
  }
}
console.log("Bomb numbers: ", bombNumbers;

// Ask a number from 1 to 100.
var guessed = [];
var score = 0;
var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
guessed.push(guess);
// If the inputted number is among the numbers generated earlier, the user loses...
for (var i = 0; i < 83; i++) {
  if (bombNumbers.includes(guess)) {
    // At the end of the game, tell the user's total score
    console.log('You lose, score: ', score);
    break;
  }
  // ...If not, continue asking numbers.
  else {
    var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
    // Can't guess the same number twice
    if (guessed.includes(guess)) {
      i--;
      var alert = alert("Non puoi inserire lo stesso numero più di una volta")
    }
    else {
      guessed.push(guess);
      score = score + 1;
    }
  }
}
console.log("Guessed numbers: ", guessed);


// Functions
function generateNumber(max) {
  return Math.ceil(Math.random() * max);
}
