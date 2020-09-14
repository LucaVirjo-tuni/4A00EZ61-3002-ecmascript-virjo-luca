const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    const thisWorks = this
    setTimeout(function () {
      // this works
      thisWorks.sayHello()
    }, 1000)
  }
}
user.sayDelayedHello()
