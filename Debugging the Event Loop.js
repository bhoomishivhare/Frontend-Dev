"use strict";
// Q9 - Predict & demonstrate microtask vs macrotask ordering

/* Prediction (before running):
1. "Script start"         (synchronous)
2. "Script end"           (synchronous)
3. "Promise callback"     (microtask)
4. "Timeout callback"     (macrotask)

Reason: Promises schedule microtasks which run after current stack but before macrotasks like setTimeout.
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// After running you will observe the predicted order. Microtasks (Promise.then) are processed
// immediately after the current synchronous code completes and before processing macrotasks.
