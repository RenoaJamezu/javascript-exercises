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