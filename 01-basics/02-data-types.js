/*
FILE: 02-data-types.js
GOAL: Learn JavaScript data types
*/

// EXERCISE 1:
// Create variables for each data type:
// string, number, boolean, undefined, null

let a = "string"
let b = 3
let c = true
let d = undefined
let e = null

// EXERCISE 2:
// Use typeof to check the type of each variable

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e) // logs "object"

// EXERCISE 3:
// Store a number as a string
// Convert it to a number

let num = "3"
console.log(num) // string
console.log(Number(num)) // number

// EXERCISE 4:
// Create a boolean that checks if a number is greater than 10

let num1 = 11
console.log(num1 > 10)