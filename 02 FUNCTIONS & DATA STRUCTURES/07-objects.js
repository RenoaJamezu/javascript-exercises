/*
7. Objects
File: 07-objects.js
*/

/// EXERCISE 1:
/// Create an object named person with:
/// - name
/// - age
/// - isStudent
/// Log the object

const person = {
  name: "Lenor",
  age: 22,
  isStudent: false
}
console.log(person)

/// EXERCISE 2:
/// Add a method named introduce
/// It logs: "Hi, I am <name> and I am <age> years old"

person.introduce = function() {
  return `Hi, I am ${this.name} and I am ${this.age} years old`
}
console.log(person.introduce())

/// EXERCISE 3:
/// Access and log:
/// - name using dot notation
/// - age using bracket notation

console.log(person.name)
console.log(person["age"])