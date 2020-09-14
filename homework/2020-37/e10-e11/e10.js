function doIt (a, b) {
  console.log(this)
}
const object = { key: 'value' }
doIt.call(object, 5, 5)
