function makeCalculation () {
  function asynFunc (resolve, reject) {
    setTimeout(() => {
      console.log('calculating stuff')
      const division = 5 / 2
      resolve(division)
    }, 1000)
  }
  const p = new Promise(asynFunc)
  return p
}

function sendStuffToBackend (result) {
  function asynFunc (resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`)
      resolve('done')
    }, 1000)
  }
  const p = new Promise(asynFunc)
  return p
}

makeCalculation()
  .then(division => sendStuffToBackend(division))
  .then(msg => console.log(msg))
