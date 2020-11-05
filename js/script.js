// Variables
var bombNumbers = [];
var guessed = [];

// Generate 16 unique random numbers from 1 to 100
var i = 0;
while (i < 16){
  var bomb = generateNumber(100);
  if (bombNumbers.includes(bomb)) {
  }
  else {
    bombNumbers.push(bomb);
    i++;
  }
}
console.log("Bomb numbers: ", bombNumbers);

// Ask a number from 1 to 100.
var l = 1;
while (l <= 84) {
  var guess = parseInt(prompt('Inserisci un numero da 1 a 100'));
  var goodGuess = verify(guess, guessed);
  // If the inputted number is among the numbers generated earlier, the user loses, if not, continue asking numbers.
  if (bombNumbers.includes(guess)) {
    //User's total score
    console.log('You lose, score: ', guessed.length - 1);
    l = 85;
  }
  else if (guessed.length === 84){
    console.log('You win, score: ', guessed.length);
    l++;
  }
  else {
    l++;
  }
}
console.log("Guessed numbers: ", guessed);


// Functions
// Generate numbers
function generateNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Verify inputted numbers
function verify(inpt, arr) {
  if (isNaN(inpt)) {
    var not = alert("Devi inserire un numero da 1 a 100");
  }
  else if (arr.includes(inpt)) {
    not = alert("Il numero non può essere scritto più di una volta");
  }
  else if (inpt <= 0 || inpt > 100) {
    not = alert("Devi inserire un numero da 1 a 100");
  }
  else {
    arr.push(inpt);
  }
}
