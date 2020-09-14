function Person (foreName, surName) {
  this.foreName = foreName
  this.surName = surName

  console.log(this instanceof Person)
}

var obj = new Person('jack', 'smith')
console.log(obj)
// with new: true, Person { foreName: 'jack', surName: 'smith' }
var obj2 = Person('jack', 'smith')
console.log(obj2)
// without new: false, undefined
