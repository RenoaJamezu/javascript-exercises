/*
FILE: 10-dom-interaction.js
GOAL: Interact with users using inputs, events, and dynamic DOM updates
*/

/* =========================
  EXERCISE 1: INPUT VALUE
  =========================
  - Select the input with id "nameInput"
  - Select the button with id "submitBtn"
  - When the button is clicked:
    - Log the value entered in the input
*/

const input = document.getElementById("nameInput")
const submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", function () {
  console.log(input.value)
})

/* =========================
EXERCISE 2: DISPLAY INPUT
=========================
- Select a paragraph with id "output"
- When the button is clicked:
- Display the input value inside the paragraph
*/

const output = document.getElementById("output")
submitBtn.addEventListener("click", function () {
  output.textContent = input.value
})

/* =========================
  EXERCISE 3: CLEAR INPUT
  =========================
  - After displaying the input value:
    - Clear the input field
*/

submitBtn.addEventListener("click", function () {
  input.value = ""
})

/* =========================
  EXERCISE 4: CLICK COUNTER
  =========================
  - Create a variable `count` starting at 0
  - Select a button with id "countBtn"
  - Select a span with id "countValue"
  - Each click:
    - Increase count by 1
    - Update the span text
*/

const countBtn = document.getElementById("countBtn")
const countValue = document.getElementById("countValue")
let count = 0
countBtn.addEventListener("click", function () {
  countValue.textContent = count += 1
})

/* =========================
  EXERCISE 5: TOGGLE CLASS
  =========================
  - Select a div with id "card"
  - Select a button with id "toggleBtn"
  - On click:
    - Toggle a class called "active" on the div
*/

const card = document.getElementById("card")
const toggleBtn = document.getElementById("toggleBtn")
toggleBtn.addEventListener("click", function () {
  card.classList.toggle("active")
})

/* =========================
  EXERCISE 6 (IMPORTANT): SIMPLE TODO
  =========================
  - Select:
    - input id "todoInput"
    - button id "addTodoBtn"
    - ul id "todoList"
  - When button is clicked:
    - Create a new <li>
    - Set its text from the input value
    - Append it to the ul
    - Clear the input
*/

const todoInput = document.getElementById("todoInput")
const addTodoBtn = document.getElementById("addTodoBtn")
const todoList = document.getElementById("todoList")
addTodoBtn.addEventListener("click", checkTodoInput)
function addTodoItem() {
  const newList = document.createElement("li")
  newList.textContent = todoInput.value
  todoList.appendChild(newList)
  todoInput.value = ""
}

/* =========================
  EXERCISE 7: REMOVE ITEM
  =========================
  - When a todo item (<li>) is clicked:
    - Remove that specific item from the list
*/

todoList.addEventListener("click", function (e) {
  document.getElementById("todoList").removeChild(e.target)
})

/* =========================
  EXERCISE 8: EMPTY CHECK
  =========================
  - Prevent adding a todo if the input is empty
  - Log "Input cannot be empty"
*/

function checkTodoInput() {
  if (!todoInput.value)
    return console.log("Input cannot be empty")
  addTodoItem()
}

/* =========================
  EXERCISE 9: KEYBOARD EVENT
  =========================
  - When the user presses "Enter" in the input:
    - Add the todo (same behavior as button click)
*/

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter")
    return checkTodoInput()
})

/* =========================
  EXERCISE 10 (CHALLENGE):
  =========================
  - Add a button "Clear All"
  - When clicked:
    - Remove all todo items from the list
*/

const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", clearTodoList)
function clearTodoList() {
  document.getElementById("todoList").innerHTML = ""
}