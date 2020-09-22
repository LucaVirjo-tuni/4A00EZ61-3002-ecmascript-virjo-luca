export default function returnArray () {
  const result = []
  const args = process.argv
  for (let i = 2; i < args.length; i++) {
    if (isNaN(Number(args[i]))) {
      throw new Error('Illegal argument exception')
    } else {
      result.push(Number(args[i]))
    }
  }
  return result
}
