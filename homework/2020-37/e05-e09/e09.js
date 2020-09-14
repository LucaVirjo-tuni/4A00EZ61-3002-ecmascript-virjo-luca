function Person (foreName, surName) {
  if (this instanceof Person) {
    this.foreName = foreName
    this.surName = surName
  } else {
    return new Person(foreName, surName)
  }
}

var obj = new Person('Luca', 'Virjo')
console.log(obj)
