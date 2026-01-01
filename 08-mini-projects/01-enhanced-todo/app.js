/*
PROJECT: Enhanced Todo App
GOAL: Build a real-world interactive app using vanilla JavaScript
*/

/* =========================
  SETUP
  =========================
  - Select all required DOM elements
  - Create an array to store todos
  - Load todos from localStorage (if any)
*/

const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")
const clearCompleted = document.getElementById("clearCompleted")
const filterBtns = document.querySelectorAll("button[data-filter]")
let currentFilter = "all"

/* =========================
  TODO STRUCTURE
  =========================
  Each todo should be an object:
  {
    id: number,
    text: string,
    completed: boolean
  }
*/

let todos = []
const savedTodos = JSON.parse(localStorage.getItem("todos"))
console.log(savedTodos)
if (savedTodos) {
  todos.push(...savedTodos)
  renderTodos2()
}

/* =========================
  ADD TODO
  =========================
  - Prevent empty input
  - Create todo object
  - Add it to array
  - Save to localStorage
  - Render todos
*/

addBtn.disabled = true
todoInput.addEventListener("keyup", function (e) {
  addBtn.disabled = !todoInput.value
  if (e.key === "Enter") createTodo()
})

function createTodo() {
  if (!todoInput.value) return console.log("No text added")
  const todo = {
    id: Date.now(),
    text: todoInput.value,
    completed: false
  }
  todos.push(todo)
  todoInput.value = ""
  localStorage.setItem("todos", JSON.stringify(todos))
  renderTodos2()
}
addBtn.addEventListener("click", createTodo)

/* =========================
  RENDER TODOS
  =========================
  - Clear existing list
  - Loop through todos
  - Create <li> for each todo
  - Add "completed" class if needed
  - Attach click event to toggle completion
*/

// my code
function renderTodos() {
  todoList.innerHTML = ""
  if (currentFilter === "active") {
    const filtered = todos.filter(todo => todo.completed === false)
    filtered.forEach(todo => {
      const newTodoList = document.createElement("li")
      newTodoList.textContent = todo.text
      newTodoList.dataset.id = todo.id
      todoList.append(newTodoList)
    })
  } else if (currentFilter === "completed") {
    const filtered = todos.filter(todo => todo.completed === true)
    filtered.forEach(todo => {
      const newTodoList = document.createElement("li")
      newTodoList.textContent = todo.text
      newTodoList.dataset.id = todo.id
      todoList.append(newTodoList)
      if (todo.completed)
        newTodoList.classList.add("completed")
    })
  } else {
    todos.forEach(todo => {
      const newTodoList = document.createElement("li")
      newTodoList.textContent = todo.text
      newTodoList.dataset.id = todo.id
      todoList.append(newTodoList)
      if (todo.completed)
        newTodoList.classList.add("completed")
    })
  }
}

// better approach
function renderTodos2() {
  todoList.innerHTML = ""

  let filteredTodos = []
  if (currentFilter === "active")
    filteredTodos = todos.filter(todo => !todo.completed) // false
  else if (currentFilter === "completed")
    filteredTodos = todos.filter(todo => todo.completed) // true
  else filteredTodos = todos

  filteredTodos.forEach(todo => {
    const li = document.createElement("li")
    li.textContent = todo.text
    li.dataset.id = todo.id
    todoList.append(li)
    if (todo.completed)
      li.classList.add("completed")
  })
}

/* =========================
  TOGGLE COMPLETE
  =========================
  - Toggle completed value
  - Save to localStorage
  - Re-render
*/

function toggleComplete(e) {
  if (e.target.tagName === "LI") {
    const id = e.target.dataset.id
    const todo = todos.find(todo => todo.id === Number(id))
    if (!todo) return
    todo.completed = !todo.completed
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos2()
  }
}
todoList.addEventListener("click", toggleComplete)

/* =========================
  FILTER TODOS
  =========================
  - Show all / active / completed
  - Use button data attributes
*/

filterBtns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const activeFilter = e.target.dataset.filter
    currentFilter = activeFilter
    renderTodos2()
  })
})

/* =========================
  CLEAR COMPLETED
  =========================
  - Remove completed todos
  - Save
  - Re-render
*/

function clearCompletedList() {
  const filteredTodos = todos.filter(todo => !todo.completed)
  localStorage.setItem("todos", JSON.stringify(filteredTodos))
  todos = filteredTodos
  renderTodos2()
}
clearCompleted.addEventListener("click", clearCompletedList)

/* =========================
  LOCAL STORAGE
  =========================
  - Save todos
  - Load todos on page load
*/