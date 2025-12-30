/*
6. Arrays
File: 06-arrays.js
*/

/// EXERCISE 1:
/// Create an array named fruits with 3 values
/// Log the entire array

const fruits = ["apple", "banana", "orange"]
console.log(fruits)

/// EXERCISE 2:
/// Add one fruit to the end of the array
/// Remove the first fruit
/// Log the array after each operation

fruits.push("mango")
console.log(fruits)
fruits.shift()
console.log(fruits)

/// EXERCISE 3:
/// Use a loop to log each fruit like:
/// "Fruit: apple"

const len = fruits.length
for (let i = 0; i < len; i++) {
  console.log(`Fruit: ${fruits[i]}`)
}