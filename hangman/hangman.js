class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.currentStatus = 'playing'
    }
    // tracks the current state of the game
    getStatus() {
        // if every string in the word array equals guessedLetters then return true
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        // set currentStatus to failed, finished or playing
        if (this.remainingGuesses === 0) {
            this.currentStatus = 'failed'
        } else if (finished) {
            this.currentStatus = 'finished'
        } else {
            this.currentStatus = 'playing'
        }
    }
    // depending on the currentStatus message return a status message for player
    getStatusMessage() {
        if (this.currentStatus === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.currentStatus === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return "Great work! You guessed the word."
        }
    }
    // get the string defined in this.word and return a string with either
    // guessedLetters or an *
    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
    
        })
        return puzzle
    }

    // 
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        // only allow the used to 
        if (this.currentStatus !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    
        this.getStatus()
    }
    getGuessLetters() {
        return `You have guessed: ${this.guessedLetters}`
    }
}