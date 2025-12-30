/*
3. Conditional Statements
File: 03-conditionals.js
*/

/// EXERCISE 1: Declare a score variable (0–100)
/// Log "A", "B", "C", "D", or "F" based on score ranges.

const score = 60

if (score >= 90 ) {
  console.log("A")
} else if (score >= 80) {
  console.log("B")
} else if (score >= 70) {
  console.log("C")
} else if (score >= 60) {
  console.log("D") 
} else {
  console.log("F")
}

/// EXERCISE 2: Declare a trafficLight variable ("red", "yellow", "green")
/// Use switch to log the correct message for each color.

const trafficLight = "red"

switch (trafficLight) {
  case "red":
    console.log("Stop")
    break;
  case "yellow":
    console.log("Ready")
    break;
  case "green":
    console.log("Go")
    break;
  default:
    console.log("Invalid traffic light")
    break;
}

/// EXERCISE 3: Declare age variable
/// If age >=18 log "You can vote", else "Too young to vote"

const age = 22

if (age >= 18) {
  console.log("You can vote")
} else {
  console.log("Too young to vote")
}

// or
console.log(age >= 18 ? "You can vote" : "Too young to vote")

// or
let vote = age >= 18 ? "You can vote" : "Too young to vote"
console.log(vote)