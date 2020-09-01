// Var can be either a global variable
var a = 1

// or a function variable
function doStuff() {
    var b = 3
    if(true) {
        var c = 4
        // all of these variables can be accessed here
        console.log(a)
        console.log(b)
        console.log(c)
    }
    // and here
    console.log(a)
    console.log(b)
    console.log(c)
}

// but only a can be accessed from outside the function
console.log(a)
/*
    these won't work
    console.log(b)
    console.log(c)
**/

doStuff();

// let and const are almost the same, the only differnce is that
// const is final and cannot be modified afterwards

let d = 5
const e = 6

console.log(d)
console.log(e)

d = 10
// e = 10 this wont work

console.log(d)
// console.log(e) so this cannot happen either

// let and const also cannot be accessed from outside curly braces

if(true) {
    let f = 29
    console.log(f)
}

// console.log(f) this won't work

// in javascript variables don't have a forced datatype so