const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}
user.sayHello()

// This prints out "Hello, undefined", because 'this' refers to the global object when invoked like this
const myfunc = user.sayHello
myfunc()
