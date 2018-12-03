// KESKEN

function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    }
    // current total less than required total but we reach the end,
    // need this or else we'll be in an infinite loop
    else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}

let result
result = minSubArrayLen([4,3,3,8,1,2,3], 11)
console.log(result)

// KESKEN
// function minSubArrayLen(array, n) {
//   let i = 0
//   let j = 0
//   let currentSum = 0
//   let currentLen = 0
//   let minLen = array.length + 1
//   while (j < array.length && currentSum < n) {
//     currentSum += array[j]
//     currentLen++
//     j++
//   }
//   minLen = currentLen
//   console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)

//   while (i < j && j < array.length) {
    
//     if (currentSum - array[i] >= n) {
//       currentSum = currentSum - array[i]
//       i++
//       currentLen--
//       if (currentLen < minLen) {
//         minLen = currentLen
//       }
//       console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)
//       continue
//     }
//     if (array[i] === array[j]) {
//       i++
//       j++
//       continue
//     }

//     if (array[i] < array[j]) {
//       if (currentSum - array[i] + array[j] <= n) {
//         currentSum = currentSum - array[i] + array[j]
//         j++
//       }
//       i++
//       console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)
//       continue
//     } 

//     if (array[i] > array[j]) {
//       i = j
//       currentSum = array[i]
//       j++
//       console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)
//       continue
//     }
//   } 
// }