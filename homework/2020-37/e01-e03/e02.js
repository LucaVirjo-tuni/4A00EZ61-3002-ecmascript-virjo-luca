const doIt = (bool) => bool ? () => console.log('World') : () => console.log('Hello')

doIt(false)()
doIt(true)()
