const todos = getSavedTodos()

// Search text filter
const filters = {
    searchText: "",
    hideCompleted: false
}

// Parse todos JSON string to objects in todos array
getSavedTodos(todos)

// Render todos
renderTodos(todos, filters)

// Input for new todo
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})