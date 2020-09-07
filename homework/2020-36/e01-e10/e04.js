function isPositiveInteger(value, onSuccess, onError) {
    if(value > 0 && Number.isInteger(value)) {
        onSuccess()
    } else {
        onError()
    }
}

function printSuccess() {
    console.log("Success!")
}

function printError() {
    console.log("Error... :(")
}

isPositiveInteger(123, printSuccess, printError)
isPositiveInteger(-12, printSuccess, printError)
isPositiveInteger(1.2, printSuccess, printError)