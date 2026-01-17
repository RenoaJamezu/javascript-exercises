/*
FILE: counter.js
GOAL: Build a persistent counter app with history
*/

/* =========================
  SETUP
=========================
- Select the following DOM elements and store them in variables:
  - counterValue span
  - incrementBtn
  - decrementBtn
  - resetBtn
  - historyList ul

- Create variables to store:
  - count (start at 0)
  - history (empty array)
*/

const counterValue = document.getElementById("counterValue")
const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")
const resetBtn = document.getElementById("resetBtn")
const historyList = document.getElementById("historyList")
let counts = 0
let history = []

/* =========================
  LOCAL STORAGE LOAD
=========================
- On page load:
  - Check if count exists in localStorage → load it
  - Check if history exists in localStorage → load it
  - Update the DOM accordingly
*/

const savedCounts = JSON.parse(localStorage.getItem("counts"))
if (savedCounts) {
  counts = savedCounts
  renderCounts()
}
const savedHistory = JSON.parse(localStorage.getItem("history"))
if (savedHistory) {
  history.push(...savedHistory)
  renderHistory()
}

/* =========================
  UPDATE COUNTER FUNCTION
=========================
- Write a function to update the counter display
- Save the updated count to localStorage
*/

function renderCounts() {
  counterValue.textContent = counts
}

/* =========================
  ADD TO HISTORY FUNCTION
=========================
- Write a function that accepts an action string ("Increment", "Decrement", "Reset")
- Push a string to history array like "Increment: 1"
- Save history to localStorage
- Re-render the history list
*/

const increment = () => {
  counts += 1
  const count = {
    action: "Increment",
    count: counts
  }
  history.push(count)
  localStorage.setItem("counts", JSON.stringify(counts))
  localStorage.setItem("history", JSON.stringify(history))
  renderHistory()
  renderCounts()
}
const decrement = () => {
  counts -= 1
  const count = {
    action: "Decrement",
    count: counts
  }
  history.push(count)
  localStorage.setItem("counts", JSON.stringify(counts))
  localStorage.setItem("history", JSON.stringify(history))
  renderHistory()
  renderCounts()
}
const reset = () => {
  counts = 0
  const count = {
    action: "Reset",
    count: counts
  }
  history.push(count)
  localStorage.setItem("counts", JSON.stringify(counts))
  localStorage.setItem("history", JSON.stringify(history))
  renderHistory()
  renderCounts()
}

// with helper function
const addHistory = (action) => {
  history.push({ action, count: counts });
  localStorage.setItem("counts", JSON.stringify(counts));
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
  renderCounts();
};

const increment2 = () => {
  counts += 1;
  addHistory("Increment");
};

const decrement2 = () => {
  counts -= 1;
  addHistory("Decrement");
};

const reset2 = () => {
  counts = 0;
  addHistory("Reset");
};

/* =========================
  RENDER HISTORY FUNCTION
=========================
- Loop through the history array
- Create an <li> for each entry
- Append it to the historyList
*/

function renderHistory() {
  historyList.innerHTML = ""

  history.forEach(h => {
    const li = document.createElement("li")
    li.textContent = `${h.action}: ${h.count}`
    historyList.prepend(li) // prepend for newest entry to appear
  });
}

/* =========================
  EVENT LISTENERS
=========================
- incrementBtn click → increase count, update counter, add history
- decrementBtn click → decrease count, update counter, add history
- resetBtn click → reset count to 0, update counter, add history
*/

incrementBtn.addEventListener("click", increment2)
decrementBtn.addEventListener("click", decrement2)
resetBtn.addEventListener("click", reset2)

/*
FILE: counter.js
STAGE: 13
GOAL: Refactor the counter app to use action-based state management
*/

/* =========================
  STEP 1 — APP STATE
=========================

INSTRUCTIONS:
- Create a single object named `state`
- This object is the ONLY source of truth
- It must contain:
  - count (number)
  - history (array)

- Do NOT create separate `count` or `history` variables
- All reads and writes must go through `state`
*/

const state = {
  count: 0,
  history: []
}

/* =========================
  STEP 2 — ACTION TYPES
=========================

INSTRUCTIONS:
- Create constants for action types
- Required action types:
  - INCREMENT
  - DECREMENT
  - RESET

- These must be strings
- These constants will be used everywhere instead of raw strings
*/

const aincrement = "INCREMENT"
const adecrement = "DECREMENT"
const areset = "RESET"

/* =========================
  STEP 3 — DOM SELECTION
=========================

INSTRUCTIONS:
- Select and store the following DOM elements:
  - counterValue span
  - increment button
  - decrement button
  - reset button
  - historyList ul

- Store them in constants
*/

// done at the top

/* =========================
  STEP 4 — DISPATCH FUNCTION
=========================

INSTRUCTIONS:
- Create a function named `dispatch`
- It must accept one parameter: `action`
- The action is an object with a `type` property

- Inside this function:
  - Decide how the state changes based on `action.type`
  - Update `state.count`
  - Push an entry into `state.history`
  - Save the updated state to localStorage
  - Call render functions

- This function is the ONLY place allowed to mutate state
*/

function dispatch(action) {
  switch (action) {
    case aincrement:
      state.count += 1
      state.history.push({
        action: "Increment",
        count: state.count
      })
      break

    case adecrement:
      state.count -= 1
      state.history.push({
        action: "Decrement",
        count: state.count
      })
      break

    case areset:
      state.count = 0
      state.history.push({
        action: "Reset",
        count: state.count
      })
      break
    default:
      console.warn("Unkown action:", action.type)
      return
  }

  render()

  renderHistory2()
}

/* =========================
  STEP 5 — RENDER COUNTER
=========================

INSTRUCTIONS:
- Create a function to render the counter value
- It must:
  - Read ONLY from `state.count`
  - Update the counterValue element

- No logic
- No state mutation
*/

function render() {
  counterValue.textContent = state.count
}

/* =========================
  STEP 6 — RENDER HISTORY
=========================

INSTRUCTIONS:
- Create a function to render history
- It must:
  - Clear the history list
  - Loop through `state.history`
  - Create an <li> for each entry
  - Display action type and count

- Do NOT modify state here
*/

function renderHistory2() {
  historyList.innerHTML = ""

  history.forEach(h => {
    const li = document.createElement("li")
    li.textContent = `${h.action}: ${h.count}`
    historyList.prepend(li) // prepend for newest entry to appear
  });
}

/* =========================
  STEP 7 — LOCAL STORAGE LOAD
=========================

INSTRUCTIONS:
- On page load:
  - Check if saved state exists in localStorage
  - If yes, replace the default state with saved state
  - If no, keep the default state
  - Render the UI once

- Do NOT trigger actions here
*/


/* =========================
  STEP 8 — EVENT LISTENERS
=========================

INSTRUCTIONS:
- Add click listeners for each button
- Each listener must:
  - Call `dispatch`
  - Pass the correct action object

- Button handlers must:
  - NOT touch state directly
  - NOT touch localStorage
  - NOT update the DOM
*/


/* =========================
  STAGE 13 CHECKLIST
=========================

VERIFY:
- All state lives inside `state`
- All updates go through `dispatch`
- Buttons only dispatch actions
- Render functions are read-only
- App works after refresh

If all true → Stage 13 complete
*/