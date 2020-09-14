const user = {
  firstName: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`)
  }
}
const myFunction = user.sayHello.bind(user)
myFunction()
