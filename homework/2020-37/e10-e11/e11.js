function doIt (a, b) {
  console.log(this)
}
const object = { key: 'value' }
// the difference is that you need to have the arguments in an array rather than separately
doIt.apply(object, [5, 5])
