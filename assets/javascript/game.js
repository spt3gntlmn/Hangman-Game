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

        var initialWord = this.gameDashes();
        this.printWord(initialWord);
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
      var temp = this.gameWord.length;
      console.log('game Word Length',temp);
      return this.gameWord.length;
    },

    // create hangman dashes on initial load
    gameDashes: function() {
      var word = "";
      for (var i = 0; i < this.gameWordLength; i++) {
        word += '_ ';
      }
      this.matchedLetters = word;
      // console.log(word, 'Samuel');
      // document.querySelector("#word").innerHTML = this.matchedLetters;
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

    // Replace dashes with guessed letters
    replaceDashes: function() {
      for (var i = 0; i < this.gameWordLength; i++) {
        // console.log('GWL: ',this.gameWordLength, ' UsrGs ',this.userGuess)
         if  (this.gameWord.charAt(i).toUpperCase() == this.userGuess) {
            if (i === 0) {
                this.matchedLetters = this.matchedLetters.substring(0, i * 2) +
                  this.userGuess.toUpperCase() + this.matchedLetters.substring((i * 2 + 1));
            } else {
                this.matchedLetters = this.matchedLetters.substring(0, i * 2) +
                  this.userGuess.toLowerCase() + this.matchedLetters.substring((i * 2 + 1));
            }
            this.countMatchedLetters++;
          }
          this.printWord(this.matchedLetters);
          console.log("TEST: position: ",this.gameWord.charAt(i),'Ltr gsd: ',this.userGuess, 'matched ltrs ',this.matchedLetters);
      }
      if (this.countMatchedLetters === this.gameWordLength) {
        console.log("You've Won !!!");
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
    hangman.replaceDashes();
    // console.log(hangman.userGuess);
  }
}