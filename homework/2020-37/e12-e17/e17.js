function helper () {
  user.sayHello()
}
const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000)
  }
}
user.sayHello()
user.sayDelayedHello()

// This works because calling the helper function always calls the sayHello function in the object.function fashion
