function Person(name, age) {
    this.name = name
    this.age = age
}

var tina = new Person("Tina", 12)

for(var key in tina) {
    console.log(tina[key])
}
