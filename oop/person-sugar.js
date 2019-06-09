// Prototypal Inheritance

class Person {
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

class Student extends Person {
    constructor (firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
    updateGrade(amount) {
        return this.grade += amount 
    }
}

const me = new Employee('Ed', 'Adkins', 33, 'Teacher', ['Teaching', 'Weights'])
me.setName('Adam Newbould')
console.log(me.getBio())
console.log(me.getYearsLeft())

const student = new Student('Theo', 'Adkins', 0, 71, ['Eating', 'Pooing'])
console.log(student.getBio())
console.log(student.updateGrade(-30))
console.log(student.getBio())

const person2 = new Person('Dwyny', 'Adkins', 32)
console.log(person2.getBio())