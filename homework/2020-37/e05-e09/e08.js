class Person {
  constructor (foreName, surName) {
    if (this instanceof Person) {
      this.foreName = foreName
      this.surName = surName
    } else {
      throw new TypeError('Cannot call a class as a function')
    }
  }
}

var obj = new Person('Luca', 'Virjo')
console.log(obj)

/**
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(foreName, surName) {
  _classCallCheck(this, Person);

  if (_instanceof(this, Person)) {
    this.foreName = foreName;
    this.surName = surName;
  } else {
    throw new TypeError('Cannot call a class as a function');
  }
};

var obj = new Person('Luca', 'Virjo');
console.log(obj);
*/
