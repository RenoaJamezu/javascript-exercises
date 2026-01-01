/*
FILE: 07-arrays.js
GOAL: Work with arrays
*/

// EXERCISE 1:
// Create an array called `foods` with at least 5 favorite foods

const foods = ["siomai", "fries", "burger", "balot", "nuggets"]

// EXERCISE 2:
// Log the first item in the array
// Log the last item in the array

console.log(foods[0])
console.log(foods[foods.length - 1])

// EXERCISE 3:
// Add a new food to the end of the array

foods.push("spag")
console.log(foods)

// EXERCISE 4:
// Remove the last food from the array

foods.pop() // removes the last
console.log(foods)

// EXERCISE 5:
// Loop through the array and log each food

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i])
}

// EXERCISE 6 (IMPORTANT):
// Create an array of numbers
// Calculate the sum of all numbers in the array

const numbers = [4, 7, 3, 8, 1]
let total = 0
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
}
console.log(total)

// EXERCISE 7:
// Find the largest number in the array (do not use Math.max)

// my approach using null
let largest = null // better approach using: numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]
  }
}
console.log(largest)

// EXERCISE 8:
// Check if the array includes a specific food
// Log true or false

console.log(foods.includes("siomai"))