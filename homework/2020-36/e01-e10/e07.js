function repeat(string, amount = 1) {
    string = String(string)
    let output = ""
    for(let i = 0; i < amount; i++) {
        output += string
    }
    return output
}

console.log(repeat("moi"))
console.log(repeat("moi", 4))