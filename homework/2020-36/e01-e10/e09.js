// Luodaan funktio ilman argumentteja ja jota kutsuttaessa printataan sana hello
var myFunc = new Function('', 'console.log("hello")')
// kutsutaan funktiota
myFunc.call()
