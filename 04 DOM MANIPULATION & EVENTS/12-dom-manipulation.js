/*
12. DOM Manipulation
File: 12-dom-manipulation.js
*/

/*
HTML SETUP:

<h1 id="heading">Original Text</h1>
<button id="changeBtn">Change Text</button>
*/

/// EXERCISE 1:
/// Select the h1 and change its text to "Text Changed"

document.getElementById("heading").innerHTML = "Text Changed"

/// EXERCISE 2:
/// Select the button
/// When clicked, change the h1 text to "Button Clicked"

document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("heading").innerHTML = "Button Clicked"
})

/// EXERCISE 3:
/// Add a CSS class named "active" to the h1 when button is clicked

document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("heading").classList.toggle("active"); // add or toggle
});