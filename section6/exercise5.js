function averagePair(array, average) {
  if (array.length < 2) {
    return false
  }
  let start = 0
  let end = array.length - 1

  let x = 2 * average

  while (start < end) {
    let sum = array[start] + array[end]
    if (sum === x) {
      return true
    }
    if (sum < x) {
      start++
    } else {
      end--
    }
  }
  return false
}

let result

result = averagePair([-1,0,3,4,5,6], 4.1)

console.log(result)
