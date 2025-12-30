/*
5. Functions
File: 05-functions.js
*/

/// EXERCISE 1:
/// Create a function named addNumbers
/// It accepts two parameters (a, b)
/// It returns their sum
/// Call the function with 5 and 10, then log the result

function addNumbers(a, b) {
  return a + b
}
console.log(addNumbers(5, 10))

/// EXERCISE 2:
/// Create a function named minutesToSeconds
/// It accepts one parameter (minutes)
/// It returns minutes * 60
/// Call it with 3 and log the result

function minutesToSeconds(minutes) {
  return minutes * 60
}
console.log(minutesToSeconds(3))

/// EXERCISE 3:
/// Create an arrow function named greet
/// It accepts a name
/// It returns: "Hello, <name>!"
/// Call it with your name and log the result

let greet = (name) => {
  return `Hello, ${name}!`
}
console.log(greet("Lenor"))