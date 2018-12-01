function maxSubarraySum(array, n) {
  if (array.length < n) {
    return null
  }
  let maxSum = 0
  let i = 0
  while (i < n) {
    maxSum += array[i]
    i++
  }
  let currentSum = maxSum

  while (i < array.length) {
    currentSum = currentSum - array[i-n] + array[i]
    //console.log('i-n', i-n, 'i', i, 'currentSum', currentSum)
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
    i++
  }
  return maxSum
}

let result

result = maxSubarraySum([-3,4,0,-2,6,-1], 2)
console.log(result)