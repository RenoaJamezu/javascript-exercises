/*
FILE: 04-conditionals.js
GOAL: Control program flow using conditions
*/

// EXERCISE 1:
// Create a variable `number`
// If the number is positive, log "Positive"
// If the number is negative, log "Negative"
// If the number is zero, log "Zero"

const number = 0
if (number > 0) console.log("Positive")
else if (number < 0) console.log("Negative")
else console.log("Zero")

// EXERCISE 2:
// Create a variable `score` (0–100)
// If score is 90 and above → log "Excellent"
// If score is 75–89 → log "Passed"
// Otherwise → log "Failed"

const score = 99
if (score >= 90) console.log("Excellent")
else if (score >= 75 && score <= 89) // or just score >= 75
  console.log("Passed")
else console.log("Failed")

// EXERCISE 3:
// Create a variable `age`
// If age is 18 or above → log "Eligible to vote"
// Otherwise → log "Not eligible to vote"

const age = 18
if (age >= 18) console.log("Eligible to vote")
else console.log("Not eligible to vote")

// EXERCISE 4:
// Create a variable `temperature`
// If temperature is greater than 30 → log "Hot"
// Else if temperature is between 20 and 30 → log "Warm"
// Else → log "Cold"

const temperature = 25
if (temperature > 30) console.log("Hot")
else if (temperature >= 20 && temperature <= 30)
  console.log("Warm")
else console.log("Cold")

// EXERCISE 5 (IMPORTANT):
// Create two variables `username` and `password`
// If username is "admin" AND password is "1234"
// → log "Login successful"
// Otherwise → log "Invalid credentials"

const username = "admin123"
const password = "1234"
if (username === "admin" && password === "1234")
  console.log("Login successful")
else console.log("Invalid credentials")