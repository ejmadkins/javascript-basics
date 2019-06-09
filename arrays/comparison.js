    // const finished = this.word.every((letter) => {
    //     return this.guessedLetters.includes(letter)
    // })

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter)) 

    // if (this.remainingGuesses <= 0) {
    //     this.currentStatus = 'failed'
    // } else if (!puzzle.split('').includes('*') && this.remainingGuesses >= 0) {
    //     this.currentStatus = 'finished'
    // } else {
    //     this.currentStatus = 'playing'
    // }

    // let finsihed = true

    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })
    //instanceOne.getStatus(instanceOne.getPuzzle())
