const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))


const createTipper = (baseTip) => {
    return (bill) => {
        return bill * baseTip
    }
}

const tip = createTipper(.15)
console.log(tip(100))
console.log(tip(150))
console.log(tip(200))
