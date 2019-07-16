const index = require('./index.js')

exports.answer = 42
module.exports.anotherAnswer = 323
// node returns module.exports on
console.log(index)
 

//  console, setTimeout are implemented in node but differently from Browsers
