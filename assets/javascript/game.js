var livesLeft = 10;
var wins = 0;
var losses = 0;


// Creation of the hangman object - the entire game will be housed in this object (save for event listeners)
var hangMan = {
    // reset: reset(),
    gameWord: "",
    userGuess: "",
    userGuesses: [],
    usdltrs: "",
    guessesLeft: 10,
    livesLeft: 10,
    wins: 0,
    losses: 0,
    dashPlacement: "",
    wordWithMatchedLetters: "",
    matchedLettersCount: 0,
    gameWords: [
        'Genesis', 'Deuteronomy', 'Samuel', 'Nehemiah', 'Song of Solomon', 'Lamentations', 
        'Obadiah', 'Habakkuk', 'Zechariah', 'Leviticus', 'Isaiah', 'Matthew', 'Romans',
        'Corinthians', 'Galatians', 'Philippians', 'Thessalonians', 'Philemon', 'Hebrews',
        'Revelation', 'Ephesians', 'Ephesians', 'Timothy', 'Peter', 'Titus', 'John', 'Mark',
        'James', 'Joshua', 'Daniel', 'Ezekiel', 'Zephaniah', 'Malachi', 'Gideon', 'Samson',
        'Gabriel', 'Lazarus', 'Transfiguration', 'Baptism', 'Melchizedek', 'Jacob', 'Passover'
    ],
    
    // Letters to be selected by user
    // letterToChoose: [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    // ],

    // Initialize the game - function calls for initializing the game
    gameIni: function() {
        this.reset();
        this.gameWord = this.chooseGameWord();  //  Game chooses game word upon initial DOM load
        this.dashPlacement = this.letterDashes(); // Create dashes for game word upon initial DOM load
    },

    // Game reset of parameters
    reset: function() {
        this.userGuess = "";
        this.userGuesses = [];
        document.getElementById("guessedLetters").innerHTML = this.userGuesses;
        this.guessesLeft = 10;
        document.getElementById("livesLeft").innerHTML = this.guessesLeft;
        this.livesLeft = 10;
        this.matchedLettersCount = 0;
    },
    
    // Choose the word of the game - function to randomly select the game word
    chooseGameWord: function() {
        var gmWrdNbr = Math.floor((Math.random() * this.gameWords.length));
        console.log(this.gameWords[gmWrdNbr]);
        return this.gameWords[gmWrdNbr];
    },
    
    // Function to create the games word's letter holders (dashes)
    letterDashes: function() {
        var dashes = "";
        for (var i = 0; i < this.gameWord.length; i++) {
            dashes += "_ " + " ";
        }
        this.wordWithMatchedLetters = dashes;
        document.querySelector("#word").innerHTML = dashes;
        console.log(dashes);
        return word;    // Why does 'word' work here?
    },
    
    // Start game - can be called anytime the game is over or during initialization
    startGame: function() {
        this.compareUserGuess();
        // console.log(this.userGuesses);       // Log out user letter
    },
    
    // Compare user choice to previously entered choices & push to userGuesses if not privously chosen otherwise alerts to rechoose
    compareUserGuess: function() {
        var check = false;
        if (this.userGuesses.length === 0) {                    // Checks to see if it's the first letter chosen
            this.userGuesses.push(this.userGuess);              // Input user letter
            document.getElementById("guessedLetters").innerHTML = this.userGuesses;
            console.log(this.userGuesses);
            this.isUserChoiceInGameWord();
        } else {
            for (var i = 0; i < this.userGuesses.length; i++) {
                if (this.userGuess === this.userGuesses[i]) {   // Checks for user choice in previously entered choices
                    check = true;                               // Returns 'true' if new choise == prior choice
                }
            }
            if (check === true) {
                alert("You've already entered that letter.  Please try again");
            } else {
                this.userGuesses.push(this.userGuess);      // Input user letter
                document.getElementById("guessedLetters").innerHTML = this.userGuesses;
                console.log(this.userGuesses);
                this.isUserChoiceInGameWord();
            }
        }
    },

    // Compare userChoice to gameWord
    isUserChoiceInGameWord: function() {
        for (var i = 0; i < this.gameWord.length; i++) {
            if (this.userGuess === this.gameWord.charAt(i).toUpperCase()) {
                this.createWordWithMatchedLetters();    // Creates string w/ letters replacing dashes
                return this.userGuess;
            }
        }
        this.guessesLeft--;
        document.getElementById("livesLeft").innerHTML = this.guessesLeft;
        if (this.guessesLeft === 0) {
            losses++;
            document.getElementById("losstrack").innerHTML = losses;
            console.log("You Didn't Win !!!");
            document.getElementById("word").innerHTML = "Sorry, You Didn't Win !!! - The Game Will Restart in 3s";
            setTimeout(function(){ hangMan.gameIni(); }, 3000);
        }
    },

    // replace dashes with letters
    createWordWithMatchedLetters: function() {
        for (var i = 0; i < this.gameWord.length; i++) {
            if (this.gameWord.charAt(i).toUpperCase() === this.userGuess) {
                if (i === 0) {
                    // console.log("Samuel it's working");
                    this.wordWithMatchedLetters = this.wordWithMatchedLetters.substring(0, i * 3) +
                        this.userGuess.toUpperCase() + this.wordWithMatchedLetters.substring((i * 3 + 1));
                } else {
                    this.wordWithMatchedLetters = this.wordWithMatchedLetters.substring(0, i * 3) +
                        this.userGuess.toLowerCase() + this.wordWithMatchedLetters.substring((i * 3 + 1));
                }
                this.matchedLettersCount++;
                this.printCorrectLetters();
                console.log(this.wordWithMatchedLetters);
                if (this.matchedLettersCount === this.gameWord.length) {
                    this.wins++;
                    document.getElementById("winstrack").innerHTML = this.wins;
                    console.log("You've Won !!!");
                    document.getElementById("word").innerHTML = "You've Won!!! - The Game Will Restart in 3s";
                    setTimeout(function(){ hangMan.gameIni(); }, 3000);
                }
            }
        }
    },

    // Print replaced dashes with letters
    printCorrectLetters: function() {
        document.getElementById("word").innerHTML = this.wordWithMatchedLetters;
    }
}


// event listener
window.onload = function(event) {
    hangMan.gameIni();
    
    document.onkeyup = function(e) {
        hangMan.userGuess = String.fromCharCode(e.keyCode).toUpperCase();
        hangMan.startGame();
        }
    }
