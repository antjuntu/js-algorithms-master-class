function maxSubarraySum(array, n) {
  if (array.length < n) {
    return null
  }
  
  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < n; i++) {
    tempSum += array[i]
  }
  maxSum = tempSum

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
} 

let result

//result = maxSubarraySum([1,2,5,2,8,1,5], 2)

result = maxSubarraySum([1,2,5,2,8,1,5], 4)

//result = maxSubarraySum([4,2,1,6], 1)

//result = maxSubarraySum([4,2,1,6,2], 4)

//result = maxSubarraySum([], 4)

console.log(result)


// function maxSubarraySum(array, n) {
//   if (array.length < n) {
//     return null
//   }
//   let maxStart = 0
//   //let maxEnd = maxStart + n - 1
//   let maxSum = 0
//   let i = 0
  
//   while(i < n) {
//     maxSum += array[i]
//     i++
//   }
//   let currentSum = maxSum
//   // here i = n
//   while (i < array.length) {
//     currentSum = currentSum - array[i - n] + array[i]
//     // console.log('i - n + 1', i - n + 1, 'i', i)
//     // console.log('currentSum', currentSum)
//     // console.log('maxSum', maxSum)
//     // console.log('maxStart', maxStart)
    
//     if (currentSum > maxSum) {
//       maxStart = i - n + 1
//       maxSum = currentSum
//     }
//     i++
//   }
//   //console.log('maxSum', maxSum, 'maxStart', maxStart)
//   return maxSum
// } 