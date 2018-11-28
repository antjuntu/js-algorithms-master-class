const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  }
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  console.log(array1)
  console.log(array2)
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] !== array1[i] * array1[i]) {
      return false
    }
  }
  return true
}

const result = same([1,2,4,3,3], [9,16,4,9,1])
console.log(result)