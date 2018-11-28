function same(a, b) {
  if (a.length !== b.length) {
    return false
  }
  let freqCounterA = {}
  let freqCounterB = {}
  for (let val of a) {
    freqCounterA[val] = (freqCounterA[val] || 0) + 1
  }
  for (let val of b) {
    if (freqCounterB[val]) {
      freqCounterB[val]++
    } else {
      freqCounterB[val] = 1
    }
  }
  for (let key in freqCounterA) {
    if (!(key * key in freqCounterB)) {
      return false
    }
    if (freqCounterB[key * key] !== freqCounterA[key]) {
      return false
    }
  }
  return true
}

const result = same([1,2,4,3,3], [9,16,4,9,1])
console.log(result)