function sumZero(a) {
  let left = 0
  let right = a.length - 1
  while (left < right) {
    let sum = a[left] + a[right]
    if (sum === 0) {
      return [a[left], a[right]]
    }
    if (sum < 0) { // a[left] < -a[right]
      left++
    } else { // a[left] > -a[right]
      right--
    }
  }
}

let result

result = sumZero([-3, -1, 0, 0, 2, 4, 5])

console.log(result)