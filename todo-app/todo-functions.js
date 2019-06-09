// Fetch existing todos from localStorage
// getSavedTodos
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
// saveTodos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
// renderTodos
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // print summary message, how many todos left (p elemnt)
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ""
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    // Add a p for each todo above.
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove todo
const removeTodo = function (id) {
    const todoIndex = todos.findIndex( function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todoIndex = todos.find(function (todo) {
        return todo.id === id
    })

    if (todoIndex !== undefined) {
        todoIndex.completed = !todoIndex.completed
    }

}

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDOM = function (todo) {

    const todoElement = document.createElement('div')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    checkbox.checked = todo.completed

    // Append checkbox to todoElement
    todoElement.appendChild(checkbox)

    // Append text to todoElement
    todoText.textContent = todo.text
    todoElement.appendChild(todoText)

    // Append button to todoElement
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Get the DOM elements for list summary
// generateSummaryDOM
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}