/*
9. String Methods
File: 09-string-methods.js
*/

/// EXERCISE 1:
/// Create a string named language with value "javascript"
/// Convert it to uppercase
/// Log the result

const language = "javascript"
const uppercase = language.toUpperCase()
console.log(uppercase)

// or
console.log(language.toUpperCase())

/// EXERCISE 2:
/// Create a string named sentence with value "I am learning JavaScript now"
/// Split the string into words
/// Count how many words there are
/// Log the count

const sentence = "I am learning JavaScript now"
const word = sentence.split(" ")
const count = word.length
console.log(count)

// or
console.log(word.length)

// or
const count2 = sentence.split(" ").length
console.log(count2)

/// EXERCISE 3:
/// Create a string named email with value "user@gmail.com"
/// Check if it contains "@"
/// Store the result in a variable named isValidEmail
/// Log isValidEmail

const email = "user@gmail.com"
const isValidEmail = email.includes("@")
console.log(isValidEmail)