function isPositiveInteger(value, onSuccess, onError) {
    if(value > 0 && Number.isInteger(value)) {
        onSuccess()
    } else {
        onError()
    }
}

isPositiveInteger(123, function() {console.log("Success!")}, function() {console.log("Error... :(")})
isPositiveInteger(-12, function() {console.log("Success!")}, function() {console.log("Error... :(")})
isPositiveInteger(1.2, function() {console.log("Success!")}, function() {console.log("Error... :(")})
