const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    // setTimeout(function () {
    //   this.sayHello()
    // }, 1000)
    setTimeout(() => { this.sayHello() }, 1000)
  }
}
user.sayDelayedHello()

// In Babel, a variable containing the user is created much like in e19
