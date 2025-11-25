"use strict";
// Q6 - Pyramid Pattern Generator
// Print a simple pyramid. Replace let with var to observe behavior (see comments below).

function generatePyramid(limit = 4) {
    // Use let for block scoping to be safe under strict mode
    for (let row = 1; row <= limit; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += "* ";
        }
        console.log(line.trim());
    }
}

console.log("Default pyramid (limit 4):");
generatePyramid(4);

// Observations if you replace `let` with `var`:
// - `var` is function scoped; if you use `var row` and `var col` in nested loops and forget to reinitialize properly,
//   variables may leak between loops leading to unexpected results in more complex scenarios.
// - Under "use strict", undeclared loop variables will throw ReferenceError. Using var avoids that but loses block scope.

// Add outer loop controlled by user input (default 5)
const userLimit = 5; // change this variable to simulate user input
console.log("\nUser-controlled pyramid (limit 5):");
generatePyramid(userLimit);
