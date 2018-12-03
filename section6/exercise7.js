function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null
  }

  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let currentTotal = total
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i-num]
    total = Math.max(total, currentTotal)
  }
  return total
}

let result

result = maxSubarraySum([-3,4,0,-2,6,-1], 2)
console.log(result)

// function maxSubarraySum(array, n) {
//   if (array.length < n) {
//     return null
//   }
//   let maxSum = 0
//   let i = 0
//   while (i < n) {
//     maxSum += array[i]
//     i++
//   }
//   let currentSum = maxSum

//   while (i < array.length) {
//     currentSum = currentSum - array[i-n] + array[i]
//     //console.log('i-n', i-n, 'i', i, 'currentSum', currentSum)
//     if (currentSum > maxSum) {
//       maxSum = currentSum
//     }
//     i++
//   }
//   return maxSum
// }