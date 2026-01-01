/*
FILE: 06-functions.js
GOAL: Write reusable functions
*/

// EXERCISE 1:
// Create a function named `addNumbers`
// It accepts two parameters
// It returns their sum
// Call the function and log the result

function addNumbers(a, b) {
  return a + b

}
console.log(addNumbers(5, 10))

// or
const addNumbers2 = (a, b) => {
  return a + b
}
console.log(addNumbers2(5, 10))

// EXERCISE 2:
// Create a function named `isEven`
// It accepts one number
// It returns true if the number is even
// Otherwise, return false

function isEven(num) {
  return (num % 2 === 0)
}
console.log(isEven(5))

// for odd
function isOdd(num) {
  return (num % 2 !== 0)
}
console.log(isOdd(5))

// EXERCISE 3:
// Create a function named `convertMinutesToSeconds`
// It accepts minutes
// It returns the equivalent seconds

function convertMinutesToSeconds(num) {
  return num * 60
}
console.log(convertMinutesToSeconds(2))

// EXERCISE 4:
// Create a function named `maxNumber`
// It accepts two numbers
// It returns the larger number

function maxNumber(a, b) {
  if (a > b) return a
  else return b
}
console.log(maxNumber(5, 2))

// or
function maxNumber2(a, b) {
  return Math.max(a, b)
}
console.log(maxNumber2(5, 6))

// or
function maxNumber3(a, b) {
  return a > b ? a : b
}

// EXERCISE 5 (IMPORTANT):
// Create a function named `greetUser`
// It accepts a name
// It returns a greeting message
// Example output: "Hello, Lenor!"

function greetUser(name) {
  return `Hello, ${name}!`
}
console.log(greetUser("Lenor"))