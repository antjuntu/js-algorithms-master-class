function countUniqueValues(a) {
  if (a.length === 0) {
    return 0
  }
  let i = 0
  let j = 1
  while (j < a.length) {
    if (a[j] != a[i]) {
      ++i
      a[i] = a[j]
    }
    j++
  }
  return i + 1
}

let result

//result = countUniqueValues([1,1,1,2,2,2,2,3])

//result = countUniqueValues([1])

result = countUniqueValues([1,2,4,5,6])

console.log(result)

function countUniqueValues(a) {
  // if (a.length === 0) {
  //   return 0
  // }
  // let counter = 1
  // let start = 0
  // let next = 0
  // while (next < a.length) {
  //   if (a[next] !== a[start]) {
  //     counter++
  //     start = next
  //   } else {
  //     next++
  //   }
  // }
  // return counter
}