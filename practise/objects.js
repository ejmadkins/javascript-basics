/*
A JavaScript object has properties associated with it.
A property of an object can be explained as a variable that is attached to the object.
Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.
The properties of an object define the characteristics of the object.
You access the properties of an object with a simple dot-notation
*/

// There are a couple of ways to provide properties to objects when they are initialized

console.log('<= OBJECT INITIALISERS =>') // 1) Object initialisers (creating objects with literal notation that delivers a single object)
const myObject = {
    property_1: 'value1',
    property_2: 'value2',
    property_3: 'value3'
}
// An objects properties can be printed to console
console.log(myObject.property_1)
// An objects property can be assigned a new value
myObject.property_1 = 'value4'
console.log(myObject.property_1)

console.log('<= CONSTRUCTOR FUNCTIONS =>') // 2) Constructor functions (creates object which can be instantiated into multiple instances using the new keyword. We are also able to pass in multiple arguments when initialising the object)

const Car = function (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

// When using constructor functions the "new" keyword must be used to instantiate an object
const myCar = new Car('Volvo', 'S40', '2011')
const myCar2 = new Car('Nissan', 'Juke', '2016')
console.log(myCar.year)
console.log(myCar2.make)
// An objects property can be assigned a new value
myCar.year = '2012'
console.log(myCar.year)

// Additional properties can be added to objects after its instantiation
myCar.maxSpeed = 110

console.log('<= OBJECT PROTOTYPAL INHERITANCE =>')

/*
When it comes to inheritance, JavaScript only has one construct: objects.
Each object has a private property which holds a link to another object called its prototype.
That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
*/

// The prototype property allows us to add new properties to object constructors

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// New methods can be added in the following way
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

// A new string could also be added in the following way

Person.prototype.nationality = "English"

const me = new Person('Ed', 'Adkins', 33, ['Teaching', 'Weights'])
me.setName('Adam Newbould')
console.log(me.getBio())

// The above prototype chain is as follows:
// me --> me.prototype --> Object.prototype --> null
console.log("1) me: ", me)
console.log("2) me.__proto__: ", me.__proto__)
console.log("3) me.__proto__.__proto__: ", me.__proto__.__proto__)
console.log("4) me.__proto__.__proto__.__proto__: ", me.__proto__.__proto__.__proto__)
console.log(me.age)
console.log(me.nationality)


console.log('<= SYNTACTIAL SUGAR =>')

//ECMAScript 2015 introduced a new set of keywords implementing classes. The new keywords include class, constructor, static, extends, and super.

class PersonTwo {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio () {
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes${like}.`
        })
    
        return bio
    }
    setName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    //reference Employee function - args can be in any order
    constructor (firstName, lastName, age, position, likes) {
        // super allows us to call the parent classes constructor
        super(firstName, lastName, age, likes)
        // define childs attributes
        this.position = position
    }
    // overrides parents getBio method
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

const meTwo = new Employee('Ed', 'Adkins', 33, 'Teacher', ['Teaching', 'Weights'])
meTwo.setName('Adam Newbould')
console.log(meTwo.getBio())
console.log(meTwo.getYearsLeft())
