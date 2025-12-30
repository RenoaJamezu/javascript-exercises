/*
10. Scope
File: 10-scope.js
*/

/// EXERCISE 1:
/// Declare a variable named globalMessage outside any function
/// Create a function that logs globalMessage
/// Call the function

const globalMessage = "global message"
function log() {
  console.log(globalMessage)
}
log();

/// EXERCISE 2:
/// Create a function named testScope
/// Inside it, declare a variable named localMessage
/// Log localMessage inside the function
/// Try logging localMessage outside the function (observe the error)

function testScope() {
  const localMessage = "local message"
  console.log(localMessage)
}
testScope()
// console.log(localMessage) // error: localMessage is not defined

/// EXERCISE 3:
/// Create an if block
/// Inside the block, declare a variable using let
/// Log it inside the block
/// Try logging it outside the block (observe the error)

if (true) {
  let test = "test"
  console.log(test)
}
// console.log(test) // error: test is not defined