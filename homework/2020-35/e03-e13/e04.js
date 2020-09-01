var readlineSync = require('readline-sync')

let userName = readlineSync.question("What's your name? ")
let amount = readlineSync.question("How many times can you bear to hear it? ")
console.log(userName.repeat(amount))