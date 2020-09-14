const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}

setTimeout(() => user.sayHello(), 1000)

user.sayHello = function () { console.log('does it work?') }
