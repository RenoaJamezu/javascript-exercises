/*
FILE: 01-variables.js
GOAL: Understand how to store and update values
*/

// EXERCISE 1:
// Declare a variable called `age` and assign your age to it
// Log it to the console

let age = 22
console.log(age)

// EXERCISE 2:
// Declare a variable called `name` using const
// Try to change its value (observe what happens)

const name = "Lenor"
// name = "James" // error: assignment to constant variable

// EXERCISE 3:
// Create two variables: `a` and `b`
// Swap their values without hardcoding the final values

let a = 5
let b = 10
console.log(a, b)
// [a, b] = [b, a] // not working in me // error: cannot set properties of undefined (setting '10')
let temp = a
a = b
b = temp
console.log(a, b)

// EXERCISE 4:
// Create a variable that stores your favorite number
// Create another variable that doubles it

const fav = 3
const doubles = fav * 2
console.log(doubles)