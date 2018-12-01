function isSubsequence(a, b) {
  // Empty string is a substring of any string!
  if (!a) {
    return true
  }
  if (a.length > b.length) {
    return false
  }
  let i = 0
  let j = 0

  do {
    if (a[i] === b[j]) {
      i++
    }
      j++
  } while (i < a.length && j < b.length)

  return i === a.length
}

let result 

result = isSubsequence('hello', 'hello world')
result = isSubsequence('abc', 'acb')

console.log(result)