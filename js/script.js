// Variables
var bombNumbers = [];
var guessed = [];
var score = 0;

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
for (var i = 0; i < 83; i++) {
  var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
  var goodGuess = verify(guess, guessed);
  // If the inputted number is among the numbers generated earlier, the user loses...
  if (bombNumbers.includes(guess)) {
    //User's total score
    console.log('You lose, score: ', score);
    break;
  }
  // ...If not, continue asking numbers.
  else {
    score = score + 1;
  }
}
console.log("Guessed numbers: ", guessed);


// Functions
function generateNumber(max) {
  return Math.ceil(Math.random() * max);
}

function verify(inpt, arr) {
  if (isNaN(inpt)) {
    var not = alert("Devi inserire un numero da 1 a 100.");
  }
  else if (guessed.includes(inpt)) {
    not = alert("Il numero non può essere scritto più di una volta");
  }
  else {
    arr.push(inpt);
  }
}
