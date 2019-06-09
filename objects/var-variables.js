var name = 'Andrew'
name = 'Vikram'
console.log(name)

// redeclaring variables
var name = 'Andrew'
var name = 'Mike'
console.log(name) // Will print: Mike

// function scope
if (true) {
    var name = 'Andrew'
    let age = 26
}
console.log(name) // Will print: Andrew
//console.log(age) // Will print: ReferenceError

// Hoisting - variables can be accessed before they're declared
age = 6
console.log(age) // Will print: 6
var age

var age
age = 6
console.log(age) // Will print: 6