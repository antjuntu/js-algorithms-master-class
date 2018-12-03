function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }
  return longest
}

let result

//result = findLongestSubstring('thisisawesome')
//result = findLongestSubstring('bbbbbbbb')
result = findLongestSubstring('thisishowwedoit')

console.log(result)

// // TOIMII
// function findLongestSubstring(word) {
//   let letters = {}
//   let longest = 0
//   let start = 0
//   let current = 0
//   while (current < word.length) {
//     let char = word[current]
//     if (!(char in letters)) {
//       letters[char] = current
//     } else if (letters[char] >= start) {
//       start = letters[char] + 1
//       letters[char] = current
//     }
//     //console.log(start, current, letters, word.substring(start, current + 1))
//     if (current - start + 1 > longest) {
//       longest = current - start + 1
//     }
//     current++
//   }
//   return longest
// }