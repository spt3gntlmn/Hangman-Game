var words = ["jesus", "matthew", "barnabus", "galilee", "sabbath"]



























































var comChoice = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var guessingLetter = null;

var computerGuess = comChoice[Math.floor(Math.random() * comChoice.length)];
document.write(computerGuess);

var updateGuessesLeft = function() {
    
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.comChoice[Math.floor(Math.random() * this.comChoice.length)];
};
var updateGuessesSoFar = function() {
  document.querySelector('#guessSoFar').innerHTML = "Guesses so far: " + lettersGuessed.join(', ');
};
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  lettersGuessed = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  lettersGuessed.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == computerGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
        }
