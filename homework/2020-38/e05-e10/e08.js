const obj = { name: 'jussi' }

function Dog (name) {
  this.name = name
  // the next line makes it so that the 'this' in this.name refers to obj.name -> jussi
  this.sniffButt = this.sniffButt.bind(obj)
}

Dog.prototype.sniffButt = function () {
  console.log(this.name + ' sniffs butt')
}

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000)
}

const spot = new Dog('spot')
const vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()
spot.delayedSniffButt()
vilma.delayedSniffButt()
