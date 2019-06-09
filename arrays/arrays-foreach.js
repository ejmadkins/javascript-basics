const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
// This will print a numbered list for each todo item
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})