const obj = { keyword: 'helloworld' }

function doIt () {
  console.log(this.keyword)
}

setTimeout(doIt.bind(obj), 1000)
