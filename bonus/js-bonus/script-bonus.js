// Variables
var bombNumbers = [];
var guessed = [];
var endGame = document.getElementById('endgame');
var score = document.getElementById('score');

// Ask difficulty
for (var i = 0; i < 1; i++){
  var difficulty = parseInt(prompt('Scegli difficoltà: Inserisci numero tra 0 (Facile), 1 (Media) e 2 (Difficile).'));
  verifyDif(difficulty, 2);
  if (difficulty === 0) {
    var lvNumbers = 100;
  }
  else if (difficulty === 1){
    lvNumbers = 80;
  }
  else if (difficulty === 2){
    lvNumbers = 50;
  }
  else {
    i--;
  }
}
document.getElementById('displayDiff').innerHTML = "Difficoltà selezionata: " + difficulty + " - Totale Numeri: " + lvNumbers;
console.log("Selected difficulty: ", difficulty, "Total Numbers: ", lvNumbers);

// Generate 16 unique random numbers from 1 to a max according to selected difficulty (lvNumbers)
for (i = 0; i < 16; i++){
  var bomb = generateNumber(lvNumbers);
  if (bombNumbers.includes(bomb)) {
    i--;
  }
  else {
    bombNumbers.push(bomb);
  }
}
console.log("Bomb numbers: ", bombNumbers);

// Ask a number from 1 to a max according to selected difficulty (lvNumbers)
for (i = 0; i < (lvNumbers - 16); i++) {
  var guess = parseInt(prompt('Inserisci un numero da 1 a ' + lvNumbers));
  var goodGuess = verify(guess, guessed, lvNumbers);
  // If the inputted number is among the numbers generated earlier, the user loses, if not, continue asking numbers.
  if (bombNumbers.includes(guess)) {
    //User's total score
    endGame.innerHTML = "HAI PERSO";
    score.innerHTML = "Punteggio Totale: " + (guessed.length -1) + " / " + (lvNumbers - 16);
    console.log('You lose, score: ', guessed.length - 1);
    break;
  }
  else if (guessed.length === (lvNumbers - 16)){
    endGame.innerHTML = "HAI VINTO";
    score.innerHTML = "Punteggio Totale: " + guessed.length + " / " + (lvNumbers - 16);
    console.log('You win, score: ', guessed.length);
  }
}
console.log("Guessed numbers: ", guessed);


// Functions
// Generate numbers
function generateNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Verify inputted difficulty
function verifyDif(inpt, lvl) {
  if (isNaN(inpt)) {
    var not = alert("Devi inserire un numero");
  }
  else if (inpt < 0 || inpt > lvl) {
    not = alert("Devi inserire un numero da 0 a " + lvl);
  }
}

// Verify inputted numbers
function verify(inpt, arr, dif) {
  if (isNaN(inpt)) {
    var not = alert("Devi inserire un numero da 1 a " + dif);
  }
  else if (arr.includes(inpt)) {
    not = alert("Il numero non può essere scritto più di una volta");
  }
  else if (inpt <= 0 || inpt > dif) {
    not = alert("Devi inserire un numero da 1 a " + dif);
  }
  else {
    arr.push(inpt);
  }
}
