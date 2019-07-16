//  Low LVL API
// process.stdout.write(Math.random().toString());
//  HIGH LVL API
// console.log(Math.random())

//  show first lvl of the process object
// console.dir(process, {depth: 0})

// function X() {
//   console.log(arguments)
// }
// X(1, 7, 9)
//  Node has a concept of WRAPPING, IIFE (Immediately Invoked Function Expression) by default,
//  that is why aguments can be accessed globally
console.log(arguments) // returns  (exports, require, module, __filename, __dirname)
