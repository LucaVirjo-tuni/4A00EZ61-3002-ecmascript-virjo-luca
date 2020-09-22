export const min = (array) => {
  let min = array[0]
  for (const element of array) {
    if (element < min) {
      min = element
    }
  }
  return min
}
export const max = (array) => {
  let max = array[0]
  for (const element of array) {
    if (element > max) {
      max = element
    }
  }
  return max
}
