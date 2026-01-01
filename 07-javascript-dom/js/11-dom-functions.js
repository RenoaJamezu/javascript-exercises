/*
FILE: 11-dom-functions.js
GOAL: Write clean, reusable DOM logic using functions
*/

/* =========================
  SETUP: SELECT DOM ONCE
  =========================
  - Select all required DOM elements
  - Store them in variables
*/

const nameInput = document.getElementById("nameInput")
const submitBtn = document.getElementById("submitBtn")
const output = document.getElementById("output")
const countBtn = document.getElementById("countBtn")
const countValue = document.getElementById("countValue")
const card = document.getElementById("card")
const toggleBtn = document.getElementById("toggleBtn")
const todoInput = document.getElementById("todoInput")
const addTodoBtn = document.getElementById("addTodoBtn")
const clearBtn = document.getElementById("clearBtn")
const todoList = document.getElementById("todoList")

/* =========================
  EXERCISE 1: SINGLE HANDLER
  =========================
  - Create ONE function to handle submit button click
  - Inside the function:
    - Guard against empty input
    - Display input value
    - Clear input
  - Attach the function to the button
*/

function addNameInput() {
  if (!nameInput.value) return
  output.textContent = nameInput.value
  nameInput.value = ""
}
submitBtn.addEventListener("click", addNameInput)

/* =========================
  EXERCISE 2: COUNTER LOGIC
  =========================
  - Move counter logic into a function
  - Button click should only call that function
*/

let count = 0
function addCount() {
  count += 1
  countValue.textContent = count
}
countBtn.addEventListener("click", addCount)

/* =========================
  EXERCISE 3: TODO CREATION
  =========================
  - Create ONE function that:
    - Validates input
    - Creates <li>
    - Appends it to the list
    - Clears input
  - Reuse this function for:
    - Button click
    - Enter key
*/

function addTodoItem() {
  if (!todoInput.value) return
  const newTodoList = document.createElement("li")
  newTodoList.textContent = todoInput.value
  todoList.append(newTodoList)
  todoInput.value = ""
}
addTodoBtn.addEventListener("click", addTodoItem)
todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter")
    return addTodoItem()
})

/* =========================
  EXERCISE 4: SAFE REMOVE
  =========================
  - Use event delegation
  - Only remove the item if a <li> is clicked
*/

// my version
todoList.addEventListener("click", function (e) {
  document.getElementById("todoList").removeChild(e.target)
})

// best practice: safe event delegation
todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI")
    todoList.removeChild(e.target)
})

/* =========================
  EXERCISE 5: CLEAR ALL
  =========================
  - Clear all todos ONLY if list has children
  - Otherwise log "Nothing to clear"
*/

function clearTodoList() {
  // better condition: (todoList.children.length === 0)
  if (!todoList.innerHTML) 
    return console.log("Nothing to clear")
  document.getElementById("todoList").innerHTML = ""
}
clearBtn.addEventListener("click", clearTodoList)

/* =========================
  EXERCISE 6 (CHALLENGE): UX IMPROVEMENT
  =========================
  - Disable "Add Todo" button if input is empty
  - Enable it when input has text
*/

addTodoBtn.disabled = true
todoInput.addEventListener("keyup", function () {
  if (!todoInput.value) return addTodoBtn.disabled = true
  addTodoBtn.disabled = false
})