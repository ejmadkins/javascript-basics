let age = 90
let isChild = age <= 7
let isSenior = age >= 65
let isAccountActive = false
let temp = 170
let isGuestOneVegan = true
let isGuestTwoVegan = true


// else if
if (isChild) {
    console.log('Welcome! You are free.')
} else if (isSenior) {
    console.log('Welcome! You get a discount.')
} else {
    console.log('Welcome!')
}

// logic not operator
if (!isAccountActive) {
    console.log('Account is locked')
}

// logical and operator
if (temp >= 70 && temp <= 90) {
    console.log('Get outside!')
} else {
    console.log('Stay inside')
}

// logical or operator
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan food.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan food.')
} else {
    console.log('Offer up anything on the menu.')
}