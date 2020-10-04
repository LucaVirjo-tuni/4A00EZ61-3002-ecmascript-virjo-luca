const fs = require('fs')
const readlineSync = require('readline-sync')

function readThisFile (fileName) {
  function asynFunc (resolve, reject) {
    if (fs.existsSync(fileName)) {
      fs.readFile(fileName, 'utf-8', function (err, data) {
        if (err) {
          reject(err)
        } else {
          try {
            data = JSON.parse(data)
          } catch (e) {
            reject("The file isn't in JSON format")
          }
          if (data.name !== undefined) {
            resolve(data)
          } else {
            reject('The file contains JSON but not the property name')
          }
        }
      })
    } else {
      reject("The file doesn't exist")
    }
  }
  const p = new Promise(asynFunc)
  return p
}

const fileName = readlineSync.question('Which file should be read? ')

readThisFile(fileName)
  .then(data => console.log(data.name))
  .catch(errormsg => console.log(errormsg))
