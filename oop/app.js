// Primitive value: string, number, boolean, null, undefined

// Prototype chain:
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

//const team = ['Ed', 'Dwyny']
//console.log(team)

//const getScore = () => 1
//console.log(getScore)

const product = 'Computer'
console.log(product)

const otherProduct = new String('Product')
console.log (otherProduct)