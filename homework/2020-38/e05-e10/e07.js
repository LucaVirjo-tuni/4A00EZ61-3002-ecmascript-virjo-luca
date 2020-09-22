function Person (name) {
  this.name = name
}

Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer')
}

function Programmer (name, salary) {
  Person.call(this, name)
  this.salary = salary
}

Programmer.prototype.codeApps = function () {
  console.log(this.name + ' implements apps')
}

Object.setPrototypeOf(Programmer, Person)

const jack = new Person('jack')
jack.drinkBeer()

const tina = new Person('tina')
tina.drinkBeer()

const hannah = new Programmer('hannah', 4000)
hannah.codeApps()
