const {a, add, b} = require('./file-2')
const {a: a3, add: add3, b: b3} = require('./file-3')

console.log(a3)
console.log(add3(a,b,a))
console.log(b3)

console.log(a)
console.log(add(a,b))
console.log(b)