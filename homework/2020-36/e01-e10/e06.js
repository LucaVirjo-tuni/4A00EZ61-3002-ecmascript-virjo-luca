function isPositiveInteger(value, onSuccess, onError) {
    if(value > 0 && Number.isInteger(value)) {
        onSuccess()
    } else {
        onError()
    }
}

isPositiveInteger(123, () => console.log("Success!"), () => console.log("Error... :("))
isPositiveInteger(-12, () => console.log("Success!"), () => console.log("Error... :("))
isPositiveInteger(1.2, () => console.log("Success!"), () => console.log("Error... :("))
