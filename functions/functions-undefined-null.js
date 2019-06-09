let double = function (x) {
    if (x === undefined) {
        console.log('Please provide x') // This will print } else {
        console.log(x)
    }
}
double()

let name = 'Andrew'
name = null
if (name === null) {
    console.log('No name is set!')
}