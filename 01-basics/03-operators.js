/*
FILE: 03-operators.js
GOAL: Work with operators
*/

// EXERCISE 1:
// Perform all arithmetic operations on two numbers

let a = 5
let b = 10
console.log("addition", a + b)
console.log("subtraction", a - b)
console.log("multiplication", a * b)
console.log("division", a / b)
console.log("modulo", a % b)

// EXERCISE 2:
// Compare two values using == and ===
// Observe the difference

let c = "5"
let d = 5
console.log(c == d)
console.log(c === d) // strict

// EXERCISE 3:
// Create a condition that checks if a number is
// greater than 5 AND less than 20

let num = 100
console.log(num > 5 && num < 20)

// EXERCISE 4:
// Use the NOT operator to reverse a boolean value

let e = 3
let f = 3
console.log(!(e == f))