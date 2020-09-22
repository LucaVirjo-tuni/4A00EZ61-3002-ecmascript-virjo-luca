function Clock () {
  this.time = new Date().toString()
  this.startInterval = function () {
    const obj = this
    setInterval(function () {
      obj.tick()
    }, 1000)
  }
  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }
  this.render = function () {
    return this.time
  }
}

const clock = new Clock()
console.log(clock.render())
clock.startInterval()
