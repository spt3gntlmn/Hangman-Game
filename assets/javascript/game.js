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
      // console.log(this.gameWord);
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
      return word;
    },

    // Replace dashes for to be guessed letters [word]
    replaceDashes: function() {
      document.querySelector("#word").innerHTML = this.matchedLetters;
    },

    //replace dashes with letters
  //   createWordWithMatchedLetters: function() {
  //     for (var i = 0; i < this.computerWordLength; i++) {
  //         if (this.computerWord.charAt(i).toUpperCase() == this.userInput) {
  //             if (i === 0) {
  //                 this.wordWithMatchedLetters = this.wordWithMatchedLetters.substring(0, i) +
  //                     this.userInput.toUpperCase() + this.wordWithMatchedLetters.substring((i * 2 + 1));
  //             } else {
  //                 this.wordWithMatchedLetters = this.wordWithMatchedLetters.substring(0, i) +
  //                     this.userInput.toLowerCase() + this.wordWithMatchedLetters.substring((i * 2 + 1));
  //             }
  //             this.matchedLettersCount++;
  //         }
  //     }
  // },
    

}


// event listener
window.onload = function(event) {
  hangman.gameIni();
  // hangman.theGameWord();
  // console.log('Samuel');
}