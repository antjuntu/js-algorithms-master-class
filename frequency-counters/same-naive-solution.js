// Time complexity n^2

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(arr1.length, arr2.length)
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * arr1[i])
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
    console.log('array2', arr2)
  }
  return true
}

const result = same([1,2,4,3,3], [9,16,4,9,1])
console.log(result)