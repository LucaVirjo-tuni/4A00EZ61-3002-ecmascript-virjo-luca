function makeCalculation (a, b) {
  function asynFunc (resolve, reject) {
    if (b !== 0) {
      setTimeout(() => {
        console.log('calculating stuff')
        const division = a / b
        resolve(division)
      }, 1000)
    } else {
      reject('Cannot divide by zero')
    }
  }
  const p = new Promise(asynFunc)
  return p
}

function sendStuffToBackend (result) {
  function asynFunc (resolve, reject) {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`)
        resolve('done')
      }, 1000)
    } else {
      reject('Failed to send to backend')
    }
  }
  const p = new Promise(asynFunc)
  return p
}

makeCalculation(10, 5)
  .then(division => sendStuffToBackend(division))
  .then(msg => console.log(msg))
  .catch(errormsg => console.log(errormsg))
