/*
FILE: 05-loops.js
GOAL: Repeat actions using loops
*/

// EXERCISE 1:
// Use a for loop to log numbers from 1 to 10

for (let i = 1; i <= 10; i++) console.log(i)

// EXERCISE 2:
// Use a for loop to log only even numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i)
}

// or
for (let i = 1; i <= 50; i++) {
  if (i % 2) continue
  console.log(i)
}

// EXERCISE 3:
// Use a while loop to log numbers from 10 down to 1

let i = 10
while (i > 0) {
  console.log(i)
  i--
}

// EXERCISE 4:
// Use a loop to calculate the sum of numbers from 1 to 100
// Log the final sum

let total = 0
for (let i = 1; i <= 100; i++) {
  total += i
}
console.log(total)

// EXERCISE 5:
// Use a for loop
// When the number reaches 5, stop the loop using break

for (let i = 1; i <= 10; i++) {
  if (i === 5) break
  console.log(i)
}

// EXERCISE 6 (IMPORTANT):
// Use a for loop
// Skip the number 3 using continue
// Log all other numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue
  console.log(i)
}