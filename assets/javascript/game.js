var winTrack = 0;
var lossTrack = 0;

var hangman = {
    words: ['Hosea',
      'Joel', 'Amos', 'Obadiah',
      'Jonah', 'Micah', 'Nahum',
      'Habakkuk', 'Zephaniah', 
      'Haggai', 'Zechariah', 'Malachi',
      ],
    letters: ['A', 'B', 'C', 'D', 'E',
      'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q',
      'R', 'S', 'T', 'U', 'V', 'W',
      'X', 'Y', 'Z'
      ],
    lives: 10,
    userGuess: "",
    userGuesses: [],
    gameWord: "",
    matchedLetters: "",
    gameWordLength: 0,
    countMatchedLetters: 0,

    gameIni: function() {
        this.lived = 10;
        this.userGuesses = [];
        this.countMatchedLetters = 0;
        this.userGuess = "";
        this.matchedLetters = "";
        this.gameWord = this.theGameWord();
        this.gameWordLength = this.calcGameWordLength();

        this.gameDashes();
        this.replaceDashes();
      },

    // randomly choose a word function      
    theGameWord: function() {
      var randnbr = Math.floor(Math.random() * this.words.length);
      // console.log(this.the);
      console.log('Samuel', randnbr, this.words[randnbr]);
      return this.words[randnbr];
    },

    // calculate gameWord length
    calcGameWordLength: function() {
      return this.gameWord.length;
      console.log(this.gameWordLength)
    },

    // create hangman dashes on initial load
    gameDashes: function() {
      var word = "";
      console.log(this.gameWordLength);
      for (var i = 0; i < this.gameWordLength; i++) {
        word += '_ ';
      }
      this.matchedLetters = word;
      console.log(word, 'Samuel');
      document.querySelector("#word").innerHTML = this.matchedLetters;
      return word;
    },

    // Determin if userGuess is in the gameWord
    checkUserGuess: function() {
      var contains = false;
      for (var i = 0; i < this.gameWordLength; i++) {
        if (gameWord.charAt(i).toUpperCase() = this.userGuess) {
          contains = true;
        }
      }
      return contains;
    },

    // Replace dashes for to be guessed letters [word]
    replaceDashes: function() {
      for (var i = 0; i < this.gameWordLength; i++) {
        if  (this.gameWord.charAt(i).toUpperCase() == this.userGuess) {
          if (i === 0) {
              this.matchedLetters = this.matchedLetters.substring(0, i) +
                  this.userGuess.toUpperCase() + this.matchedLetters.substring((i * 2 + 1));
          } else {
              this.matchedLetters = this.matchedLetters.substring(0, i) +
                  this.userGuess.toLowerCase() + this.matchedLetters.substring((i * 2 + 1));
          }
        }
      }
    },
    
    // print word
    printWord: function(word) {
      document.querySelector("#word").innerHTML = word;
      console.log(word);
    },
    
}


// event listener
window.onload = function(event) {
  hangman.gameIni();

  document.onkeyup = function(e) {
    hangman.userGuess = String.fromCharCode(e.keyCode).toUpperCase();
    console.log(hangman.userGuess);
  }
}