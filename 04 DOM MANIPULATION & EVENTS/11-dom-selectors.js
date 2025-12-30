/*
11. DOM Selectors
File: 11-dom-selectors.js
*/

/*
HTML SETUP (use this in index.html):

<h1 id="title">Hello World</h1>
<p class="description">Learning DOM</p>
<button>Click me</button>
*/

/// EXERCISE 1:
/// Select the h1 using getElementById
/// Log the element

const element = document.getElementById("title")
console.log(element)

/// EXERCISE 2:
/// Select the paragraph using querySelector
/// Log the element

const element2 = document.querySelector("p")
console.log(element2)

/// EXERCISE 3:
/// Select the button using querySelector
/// Log the element

const element3 = document.querySelector("button")
console.log(element3)