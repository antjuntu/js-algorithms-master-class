function sameFrequency(num1, num2) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  //console.log(strNum1, strNum2)
  if (strNum1.length !== strNum2.length) {
    return false
  }
  const countNum1 = {}
  const countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  for (let i = 0; i < strNum2.length; i++) {
    countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false
    }
  }
  return true
}

let result
 
result = sameFrequency(182, 281)

console.log(result)

// function sameFrequency(a,b) {
//   const lookup = {}

//   while (a > 0) {
//     let digit = a % 10
//     lookup[digit] = lookup[digit] ? lookup[digit] + 1 : 1
//     a = Math.floor(a / 10)
//   }
//   //console.log(lookup)

//   while (b > 0) {
//     let digit = b % 10
//     if (!lookup[digit]) {
//       return false
//     }
//     lookup[digit]--
//     b = Math.floor(b / 10)
//   }
//   return true
// }