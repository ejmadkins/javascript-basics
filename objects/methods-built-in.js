let name = '  Andrew Mead '
// Length property
console.log(name.length)
// Convert to upper case
console.log(name.toUpperCase())
// Convert to lower case
console.log(name.toLowerCase())
let password = 'abc123asdf098'
// Includes method
console.log(password.includes('password'))

let num = 103.941
// Specify decimal points
console.log(num.toFixed(2))
// Round numbers
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
// Generate a random number
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min