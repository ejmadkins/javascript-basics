// Global scope (name, getName)
    // Local scope (age)
        // Local scope (location)
    // Local scope (height)

let name = 'Andrew'
let getName = function () {
    console.log(name)
    let age = 26

    if (2 > 0) {
        console.log(name)
        console.log(age)
        let location = 'Philadelphia'
    }
}

getName()
console.log(name)

if (1 < 2) {
    console.log(name)
    let height = 72
    getName()
}