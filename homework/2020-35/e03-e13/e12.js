var readlineSync = require('readline-sync')

let input = readlineSync.question("Which word's palindromity do you wish to check? ")

input = input.toUpperCase()

let result = ""

for(let i = input.length; i > 0; i--) {
    result += input.charAt(i - 1)
}

if(result === input) {
    console.log(`${input} is a palindrome!`)
} else {
    console.log(`${input} is not a palindrome... :(`)
}