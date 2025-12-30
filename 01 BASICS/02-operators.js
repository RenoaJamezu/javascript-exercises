/*
2. Operators
File: 02-operators.js
*/

/// EXERCISE 1: Declare a price variable (100) and tax variable (0.15)
/// Calculate total price = price + price*tax and log it.

const price = 100
const tax = 0.15

const totalPrice = price + (price * tax)
console.log(totalPrice)

/// EXERCISE 2: Declare a number variable and check if it is even or odd. Log "Even" or "Odd".

const num = 7
if (num % 2 === 0) console.log("Even")
else console.log("Odd")

// or
console.log(num % 2 === 0 ? "Even" : "Odd")

/// EXERCISE 3: Declare two age variables (age1, age2). Log which age is bigger or if they are equal.

const age1 = 18
const age2 = 23

if (age1 === age2) {
  console.log("ages are equal")
} else if (age1 < age2) {
  console.log("age2 is bigger " + age2)
} else {
  console.log("age1 is bigger " + age1)
}