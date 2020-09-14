function Person (foreName, surName) {
  if (this instanceof Person) {
    this.foreName = foreName
    this.surName = surName
  } else {
    throw new TypeError('Cannot call a class as a function')
  }
}

var obj = new Person('Luca', 'Virjo')
console.log(obj)
