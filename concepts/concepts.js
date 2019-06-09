const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: false
}, {
    text: 'buy food',
    completed: false
}, {
    text: 'do work',
    completed: true
}, {
    text: 'exercise',
    completed: true
}]

/*
// print summary message, how many todos left (p elemnt)
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('#summary-todos').appendChild(summary)

// Add a p for each todo above.
incompleteTodos.forEach(function (todo) {
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.text
    document.querySelector('#remaining-todos').appendChild(newTodo)
})

// Search text filter
const filters = {
    searchText: ""
}
*/

/*
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

console.log(incompleteTodos)
incompleteTodos.forEach(function (todo) {
    console.log("title: " + todo.text)
    console.log("completed: " + todo.completed)
})*/
