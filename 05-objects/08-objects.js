/*
FILE: 08-objects.js
GOAL: Understand and work with objects
*/

// EXERCISE 1:
// Create an object called `person`
// It should have: name, age, isStudent

const person = {
  name: "Lenor",
  age: 22,
  isStudent: false
}

// EXERCISE 2:
// Log the person's name using dot notation
// Log the person's age using bracket notation

console.log(person.name)
console.log(person["age"])

// EXERCISE 3:
// Update the person's age

person.age = 23

// EXERCISE 4:
// Add a new property called `city`

person.city = "Sibagat"

// EXERCISE 5:
// Delete the `isStudent` property

delete person.isStudent

// EXERCISE 6 (IMPORTANT):
// Loop through the object and log each key and value

for (let x in person) {
  console.log(x + ": " + person[x])
}