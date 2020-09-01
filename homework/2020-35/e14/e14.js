var readlineSync = require('readline-sync')
var asciiTable = require('asciitable')

let database = []
var nextID = 0

var options = {
    skinny: true,
    intersectionCharacter: "O",
    columns: [
        {field: "id", name: "Student ID"},
        {field: "name",  name: "Student name"}
    ],
};

function add () {
    console.log()
    let studentName = readlineSync.question(`May I have a student name?`)
    database.push({id: nextID, name: studentName})
    nextID++
}

function remove () {
    console.log()
    let id = readlineSync.question(`May I have the ID?`)
    id = Number(id)
    let found = false
    for(let i = 0; i < database.length; i++) {
        if(database[i].id === id) {
            database.splice(i, 1)
            console.log(`Removed`)
            found = true
        }
    }

    if(!found) {
        console.log(`Student not found`)
    }
}

function display () {
    console.log()
    console.log(asciiTable(options, database))
}

function main () {
    let input
    let end = false
    while(!end) {
        let choice = readlineSync.question(`
        [1] Add
        [2] Remove
        [3] Display
        [0] CANCEL
        
        Choice? [1, 2, 3, 0]
        
        `)

        switch(choice) {
            case "1":
                add()
                break
            case "2":
                remove()
                break
            case "3":
                display()
                break
            case "0":
                end = true
                break
        }
    }
}

main()