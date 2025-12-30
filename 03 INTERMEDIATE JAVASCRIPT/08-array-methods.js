/*
8. Array Methods
File: 08-array-methods.js
*/

/// EXERCISE 1:
/// Create an array named numbers with values [1, 2, 3, 4]
/// Use map to create a new array where each number is multiplied by 2
/// Store the result in a variable named doubledNumbers
/// Log doubledNumbers

const numbers = [1, 2, 3, 4]
function multiplied(num) {
  return num * 2
}
const doubledNumbers = numbers.map(multiplied)
console.log(doubledNumbers)

// or 
const doubledNumbers2 = numbers.map(num => num * 2)
console.log(doubledNumbers2)

/// EXERCISE 2:
/// Create an array named ages with values [10, 15, 18, 21, 30]
/// Store it in a variable named adults
/// Use filter to create a new array that contains only values 18 and above
/// Log adults

const ages = [10, 15, 18, 21, 30]
function checkAdult(age) {
  return age >= 18
}
const adults = ages.filter(checkAdult)
console.log(adults)

// or
const adults2 = ages.filter(age => age >= 18)
console.log(adults2)

/// EXERCISE 3:
/// Create an array named prices with values [50, 100, 150]
/// Use reduce to calculate the total price
/// Store the result in a variable named totalPrice
/// Log totalPrice

const prices = [50, 100, 150]
function getSum(total, num) {
  return total += num
}
const totalPrice = prices.reduce(getSum, 0)
console.log(totalPrice)

// or
const totalPrice2 = prices.reduce((total, num) => total += num, 0)
console.log(totalPrice2)