const characters = [{
    text: 'Maul',
    side: 'light',
}, {
    text: 'Leia',
    side: 'light',
}, {
    text: 'Yoda',
    side: 'light',
}, {
    text: 'Luke',
    side: 'light',
}, {
    text: 'Vader',
    side: 'dark',
}]


//first try

/*
filters = {
    searchText: ""
}

const renderCharactersTable = function (characters) {
    characters.forEach(function (character) {
        //const characterElement = document.createElement('td')
        //characterElement.textContent = character.text
        const tableRef = document.getElementById('table')
        const newRow = tableRef.insertRow(tableRef.rows.length)
        const newCell = newRow.insertCell(0)
        const characterElement = document.createTextNode(character.text)
        newCell.appendChild(characterElement)
    })
}

renderCharactersTable(characters)

    const renderCharacters = function (characters, filters) {
    filteredCharacters = characters.filter(function (character) {
        return character.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#renderCharacters').innerHTML = ""

    filteredCharacters.forEach( function (character) {
        const characterElement = document.createElement('p')
        characterElement.textContent = character.text
        document.querySelector('#renderCharacters').appendChild(characterElement)
    })
}

renderCharacters(characters, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderCharacters(characters, filters)
})

*/


//second try

/*
filters = {
    searchText: ""
}

const renderCharacters = function (characters, filters) {

    const filteredCharacters = characters.filter( function(character) {
        return character.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#renderCharacters').innerHTML = ""

    filteredCharacters.forEach(function (character) {
        const characterElement = document.createElement('p')
        characterElement.textContent = character.text
        document.querySelector('#renderCharacters').appendChild(characterElement)
    })
}

renderCharacters(characters, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    console.log(e.target.value)
    renderCharacters(characters,filters)
})
*/


filters = {
    searchText: ""
}


const renderCharacters = function (characters, filters) {
    const filterCharacters = characters.filter( function (character) {
        return character.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#renderCharacters').innerHTML = ""

    filterCharacters.forEach( function (character) {
        const characterElement = document.createElement('p')
        characterElement.textContent = character.text
        document.querySelector('#renderCharacters').appendChild(characterElement)
    })
}

renderCharacters(characters, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderCharacters(characters, filters)
})