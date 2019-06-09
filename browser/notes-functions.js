// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function(id) {
    const noteIndex = notes.findIndex( function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {

    const noteE = document.createElement('div')
    const textE = document.createElement('a')
    const buttonE = document.createElement('button')

    // Setup the remove note button
    buttonE.textContent = 'x'
    noteE.appendChild(buttonE)
    buttonE.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the node title text
    if (note.title.length > 0) {
        textE.textContent = note.title
    } else {
        textE.textContent = 'Unamed note'
    }
    textE.setAttribute('href', `/edit.html#${note.id}`)
    noteE.appendChild(textE)

    return noteE
}


const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort( function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
        return notes
    }
}

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ""

    filteredNotes.forEach(function (note) {
        const noteE = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteE)
    })
}

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}