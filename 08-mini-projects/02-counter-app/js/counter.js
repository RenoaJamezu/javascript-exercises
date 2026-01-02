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
let count = 0
let history = []

/* =========================
  LOCAL STORAGE LOAD
=========================
- On page load:
  - Check if count exists in localStorage → load it
  - Check if history exists in localStorage → load it
  - Update the DOM accordingly
*/

/* =========================
  UPDATE COUNTER FUNCTION
=========================
- Write a function to update the counter display
- Save the updated count to localStorage
*/


/* =========================
  ADD TO HISTORY FUNCTION
=========================
- Write a function that accepts an action string ("Increment", "Decrement", "Reset")
- Push a string to history array like "Increment: 1"
- Save history to localStorage
- Re-render the history list
*/

/* =========================
  RENDER HISTORY FUNCTION
=========================
- Loop through the history array
- Create an <li> for each entry
- Append it to the historyList
*/

/* =========================
  EVENT LISTENERS
=========================
- incrementBtn click → increase count, update counter, add history
- decrementBtn click → decrease count, update counter, add history
- resetBtn click → reset count to 0, update counter, add history
*/
