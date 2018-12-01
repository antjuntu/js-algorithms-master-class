// One Liner Solution
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length
}

let result

result = areThereDuplicates(1,2,4,2,7,6)
//result = areThereDuplicates('c', 'w', 'a', 'e', 'i')

console.log(result)

// function areThereDuplicates(...args) {
//   //console.log(args)
//   const freq = {}
//   for (let val of args) {
//     freq[val] = (freq[val] || 0) + 1
//   }
//   //console.log(freq)

//   for (let key in freq) {
//     if (freq[key] > 1) {
//       return true
//     }
//   }
//   return false
// }

// function areThereDuplicates(...args) {
//   //console.log(args)
//   args.sort()
//   //console.log(args)
//   let prev = 0
//   let next = 1
//   while (next < args.length) {
//     if (args[prev] === args[next]) {
//       return true
//     }
//     prev++
//     next++
//   }
//   return false
// }