//const myAge = 27

//let message
//if (myAge >= 18) {
//    message = 'You can vote!'
//} else {
//    message = 'You cannot vote.'
//}

//const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

//console.log(message)

// const myAge = 20
// const showPage = () => {
//     return 'Showing the page'
// }
// const showErrorPage = () => {
//     return 'Showing the error page'
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Dwyny', 'Theo']

const correctMembers = () => {
    return `Team size: ${team.length}`
}

const tooManyMembers = () => {
    return 'Too many people on your team'
}

const teamSize = team.length <= 4 ? correctMembers() : tooManyMembers()
console.log(teamSize)