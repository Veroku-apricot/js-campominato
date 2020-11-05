// Variables
var bombNumbers = [];
var guessed = [];
var endGame = document.getElementById('endgame');
var score = document.getElementById('score');

// Ask difficulty
var i = 0;
while (i < 1){
  var difficulty = parseInt(prompt('Scegli difficoltà: Inserisci numero tra 0 (Facile), 1 (Media) e 2 (Difficile).'));
  verifyDif(difficulty, 2);
  if (difficulty === 0) {
    var lvNumbers = 100;
    i++;
  }
  else if (difficulty === 1){
    lvNumbers = 80;
    i++;
  }
  else if (difficulty === 2){
    lvNumbers = 50;
    i++;
  }
}
document.getElementById('displayDiff').innerHTML = "Difficoltà selezionata: " + difficulty + " - Totale Numeri: " + lvNumbers;
console.log("Selected difficulty: ", difficulty, "Total Numbers: ", lvNumbers);

// Generate 16 unique random numbers from 1 to a max according to selected difficulty (lvNumbers)
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

// Ask a number from 1 to a max according to selected difficulty (lvNumbers)
var l = 1;
while (l <= (lvNumbers - 16)) {
  var guess = parseInt(prompt('Inserisci un numero da 1 a ' + lvNumbers));
  var goodGuess = verify(guess, guessed, lvNumbers);
  // If the inputted number is among the numbers generated earlier, the user loses, if not, continue asking numbers.
  if (bombNumbers.includes(guess)) {
    //User's total score
    endGame.innerHTML = "HAI PERSO";
    score.innerHTML = "Punteggio Totale: " + (guessed.length -1) + " / " + (lvNumbers - 16);
    console.log('You lose, score: ', guessed.length - 1);
    l = (lvNumbers - 16) + 1;
  }
  else if (guessed.length === (lvNumbers - 16)){
    endGame.innerHTML = "HAI VINTO";
    score.innerHTML = "Punteggio Totale: " + guessed.length + " / " + (lvNumbers - 16);
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
