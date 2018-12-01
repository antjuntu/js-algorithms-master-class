// KESKEN

function minSubArrayLen(array, n) {
  let i = 0
  let j = 0
  let currentSum = 0
  let currentLen = 0
  let minLen = array.length + 1
  while (j < array.length && currentSum < n) {
    currentSum += array[j]
    currentLen++
  }
  minLen = currentLen
  console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)

  while (i < j && j < array.length) {
    
    if (currentSum - array[i] >= n) {
      currentSum = currentSum - array[i]
      i++
      currentLen--
      if (currentLen < minLen) {
        minLen = currentLen
      }
      console.log('i', i, 'j', j, 'currentSum', currentSum, 'currentLen', currentLen, 'minLen', minLen)
      continue
    }
    if (array[i] === array[j]) {
      i++
      j++
      continue
    }

    if (array[i] < array[j]) {
      if (currentSum - array[i] + array[j] <= n) {
        currentSum = currentSum - array[i] + array[j]
        i++
        j++
      } else (

      )
       
    } 

  }
  
}

let result
result = minSubArrayLen([4,3,3,8,1,2,3], 11)
console.log(result)