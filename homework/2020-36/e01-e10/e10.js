const doIt = function() {return Array.prototype.slice.call(arguments).join('')}

console.log(doIt("a"))
console.log(doIt("a", "b"))
console.log(doIt("a", "b", "c"))
