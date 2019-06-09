// Sample Data
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// Prints a summary of items in the todos array
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

// Elements can be created, such as the following "h2" element
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
// Values can then be added to the element using appendChild
document.querySelector('body').appendChild(summary)

// We can select an element and add an event listener to take a particular action
// In this case, we have a button that once pressed adds a new <p> with the string "Clicked!"
document.querySelector('button').addEventListener('click', function (e) {
    const p = document.createElement('p')
    p.textContent = "You Clicked!"
    document.querySelector('#example-loop-div').appendChild(p)
})

// The below shows how a text box can be used, again using the add even listener
document.querySelector('#text-example').addEventListener('input', function (e) {
    const p = document.createElement('p')
    p.textContent = e.target.value
    document.querySelector('#example-loop-div').appendChild(p)
})

// t
document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('#example-loop-div').forEach(function(note) {
        note.remove()
    })
})

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#example-loop-div').appendChild(p)
})