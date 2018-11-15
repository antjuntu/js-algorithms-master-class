let instructor = {
  firstName: 'Antti',
  isInstructor: true,
  favoriteNUmbers: [1,2,3,4]
}

const keys = Object.keys(instructor)
console.log(keys)

const values = Object.values(instructor)
console.log(values)

const entries = Object.entries(instructor)
console.log(entries)

const hasOwnProperty = instructor.hasOwnProperty("firstName")
console.log(hasOwnProperty)