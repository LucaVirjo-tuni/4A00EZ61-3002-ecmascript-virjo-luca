function doIt () {
  console.log(this)
  console.log(this === global)
  global.a = 'global'
}

doIt()
console.log(global.a)
