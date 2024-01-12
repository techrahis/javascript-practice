// Imediately Invoked Function Expression (IIFE)

/*

What is IFFE?
=>  A function that is executed right after it is created.

Why we use IFFE?
=>  To create a new scope that is hidden from outside scope or to remove poluted global scope.

How to create IFFE?
=>  Wrap function in parenthesis and call it. (function(){})(); first parenthesis is for function and second is for calling it.

*/

// Example 1

(function () {
  console.log("I am IIFE");
})();

// ; is used to prevent error if previous code is not ended with semicolon.

// Example 2

(() => {
  console.log("I am IIFE");
})();

// Example 3 (Passing arguments) (IIFE)

((a, b) => {
  console.log(a + b);
})(56, 4);

// Example 4 (Named IIFE)
(function chai() {
  console.log("I am a named IIFE");
})();
