/*
13. Events
File: 13-events.js
*/

/*
HTML SETUP:

<button id="counterBtn">Clicked 0 times</button>
<input id="nameInput" placeholder="Type your name" />
<p id="output"></p>
*/

/// EXERCISE 1:
/// Select the button
/// Each click should increase a counter
/// Update button text with the count

const button = document.getElementById("counterBtn")
let count = 0
const increase = () => {
  count += 1
  button.innerHTML = `Clicked ${count} times` // innerHTML or textContent
}
button.addEventListener("click", increase)

// or
let count2 = 0
document.getElementById("counterBtn2").addEventListener("click", () => {
  count2 += 1
  document.getElementById("counterBtn2").innerHTML = `Clicked ${count2} times`
})

// or
let count3 = 0
function increase2() {
  count3 += 1
  this.innerHTML = `Clicked ${count3} times`
}
document.getElementById("counterBtn3").addEventListener("click", increase2)

/// EXERCISE 2:
/// Select the input and paragraph
/// When user types, display the input value in the paragraph

const input = document.getElementById("nameInput")
const output = document.getElementById("output")

input.addEventListener("input", () => {
  output.innerHTML = input.value
})

// or
document.getElementById("nameInput2").addEventListener("input", (e) => {
  document.getElementById("output2").innerHTML = e.target.value;
});

/// EXERCISE 3:
/// Prevent default behavior (hint: use a form submit event)

const form = document.getElementById("myForm")
const formInput = document.getElementById("formInput")
form.addEventListener("submit", (e) => {
  e.preventDefault() // prevents page refresh
  document.getElementById("formOutput").innerHTML = `Form submitted ${formInput.value}`
})

// or
document.getElementById("myForm2").addEventListener("submit", (e) => {
  e.preventDefault()
  document.getElementById("formOutput2").innerHTML = "Form Submitted"
})

// or
const submit = (e) => {
  e.preventDefault()
  document.getElementById("formOutput3").innerHTML = "Form Submitted"
}
document.getElementById("myForm3").addEventListener("submit", submit)