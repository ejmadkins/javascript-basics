const puzzleEl = document.querySelector('#puzzle')
const guessedLettersEl = document.querySelector('#guessed-letters')
const guessesEl = document.querySelector('#guesses')
const instanceOne = new Hangman('rudy dog', 2)

puzzleEl.textContent = instanceOne.getPuzzle()
guessedLettersEl.textContent = instanceOne.getGuessLetters()
guessesEl.textContent = instanceOne.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    instanceOne.makeGuess(guess)
    puzzleEl.textContent = instanceOne.getPuzzle()
    guessedLettersEl.textContent = instanceOne.getGuessLetters()
    guessesEl.textContent = instanceOne.getStatusMessage()
})

// Making a HTTP request
getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// Making a HTTP request
getCountry('GB', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})