function validAnagram(a, b) {
  if (a.length !== b.length) {
    return false
  }
  
  const lookup = {}

  for (let i = 0; i < a.length; i++) {
    let letter = a[i]
    // if letter exists, increment, otherwisw set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < b.length; i++) {
    let letter = b[i]
    // can't find letter or letter is zero then it's not an anagaram
    if (!lookup[letter] || lookup[letter] === 0) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

const result = validAnagram('jussi', 'uisjs')

// const result = validAnagram('', '')

// const result = validAnagram('vaarin', 'rinavr')

console.log(result)

// function validAnagram(a, b) {
//   if (a.length !== b.length) {
//     return false
//   }
  
//   const frA = {}
//   const frB = {} 
//   for (let val of a) {
//     frA[val] = (frA[val] || 0) + 1
//   }
//   for (let val of b) {
//     if (frB[val]) {
//       frB[val]++
//     } else {
//       frB[val] = 1
//     }
//   }
//   //console.log(frA, frB)
//   for (let key in frA) {
//     if (!(key in frB)) {
//       return false
//     }
//     if (frB[key] !== frA[key]) {
//       return false
//     }
//   }
//   return true
// }