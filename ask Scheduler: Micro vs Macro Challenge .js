"use strict";
// Q2 - Microtask vs Macrotask demonstration

console.log("Start");

// macrotask
setTimeout(() => {
  console.log("setTimeout (macrotask)");
}, 0);

// microtask
Promise.resolve().then(() => {
  console.log("Promise.then (microtask)");
});

// synchronous
console.log("Synchronous log");

// final
console.log("End");

/*
Expected explanation (in comments):
Output order will be:
1. Start
2. Synchronous log
3. End
4. Promise.then (microtask)
5. setTimeout (macrotask)

Why: JavaScript runs synchronous code first. When the call stack clears,
microtasks (Promise callbacks) run before the event loop proceeds to macrotasks
(setTimeout callbacks). So Promise.then runs before setTimeout even if both were scheduled.
*/
