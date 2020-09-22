class Person {
  constructor (name) {
    this.name = name
    // when you create a function here, it's created separately for each person object
    this.drinkBeer = function () {
      console.log(this.name + ' drinks beer')
    }
  }

  // When you create a function here, it's not duplicated in the computer's memory
  sayHello () {
    console.log('hello from ' + this.name)
  }
}

const tina = new Person('tina')
tina.drinkBeer()
