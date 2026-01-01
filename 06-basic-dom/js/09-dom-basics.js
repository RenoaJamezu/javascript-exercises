/*
FILE: 09-dom-basics.js
GOAL: Learn how to select and manipulate HTML elements
*/

// EXERCISE 1:
// Select an element with id "title" and log it

const title = document.getElementById("title")
console.log(title)

// EXERCISE 2:
// Select all elements with class "item" and log them

const items = document.getElementsByClassName("item")
console.log(items)

// EXERCISE 3:
// Change the textContent of an element with id "title" to "Hello, DOM!"

title.textContent = "Hello, DOM!"

// EXERCISE 4:
// Change the background color of an element with id "box" to "lightblue"

document.getElementById("box").style.backgroundColor = "lightblue"

// EXERCISE 5:
// Add a class "active" to an element with id "menu"

document.getElementById("menu").classList.add("active")

// EXERCISE 6:
// Remove the class "hidden" from an element with id "sidebar"

document.getElementById("sidebar").classList.remove("class")

// EXERCISE 7 (IMPORTANT):
// Add a click event listener to a button with id "btn"
// When clicked, log "Button clicked!"

document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!")
})

// EXERCISE 8:
// Create a new paragraph element with text "New paragraph"
// Append it to a div with id "container"

const newPara = document.createElement("p")
newPara.textContent = "New paragraph"
document.getElementById("container").appendChild(newPara)

// EXERCISE 9:
// Remove the last child of the div with id "container"

const lastChild = document.getElementById("container").lastElementChild
document.getElementById("container").removeChild(lastChild)