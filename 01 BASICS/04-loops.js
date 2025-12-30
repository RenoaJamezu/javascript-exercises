/*
4. Loops
File: 04-loops.js
*/

/// EXERCISE 1: Use a for loop to print numbers 1–10


for (let i = 1; i <= 10; i++) console.log(i)

/// EXERCISE 2: Use a while loop to sum numbers from 1–100 and log the result

let total = 0
let i = 1
while (i <= 100) {
  total += i
  i++
}
console.log(total)

/// EXERCISE 3: Use a for loop to count down from 10 to 1 and log each number

for (let i = 10; i > 0; i--) console.log(i)