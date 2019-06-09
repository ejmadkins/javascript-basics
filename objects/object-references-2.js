// Both logs print different things
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account = {}
    account.age = 1
    console.log(account)
}


addExpense(myAccount, 2000)
console.log(myAccount)