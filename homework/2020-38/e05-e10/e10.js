/* eslint-disable eqeqeq */
/* eslint-disable no-extend-native */
String.prototype.isPalindrome = function () {
  var reverse = this.split('').reverse().join('')
  return this == reverse
}

console.log('saippuakauppias'.isPalindrome()) // true
console.log('abc'.isPalindrome()) // false
