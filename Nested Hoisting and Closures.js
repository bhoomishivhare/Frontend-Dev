"use strict";
// Q10 - Nested Hoisting and Closures
// Original code:
// function outer() {
//   console.log(count); // ?
//   var count = 5;
//   function inner() {
//     console.log(count); // ?
//     var count = 10;
//   }
//   inner();
// }
// outer();
//
// Prediction & explanation:
// - In outer(), `var count` is hoisted to the top of outer's scope and initialized to undefined.
//   So first console.log(count) prints undefined.
// - Inside inner(), `var count` is also hoisted to the top of inner's scope (shadowing outer's count),
//   initialized to undefined — so console.log(count) inside inner prints undefined as well.
// Final observed output: undefined, undefined

function outer() {
    console.log("outer before assignment ->", count); // undefined (hoisted var)
    var count = 5;
    function inner() {
        console.log("inner before assignment ->", count); // undefined (inner's var hoisted)
        var count = 10;
        console.log("inner after assignment ->", count); // 10
    }
    inner();
    console.log("outer after inner ->", count); // 5 (outer's count unchanged by inner's var)
}
outer();

// Arrow version demonstration:
// If we remove the inner's var, an arrow function will use lexical scope (outer's variable).
function outerLexical() {
    console.log("outerLexical before assignment ->", count); // undefined
    var count = 5;
    const innerArrow = () => {
        // if we DO NOT declare var count here, arrow will use outer's 'count'
        console.log("innerArrow uses outer count ->", count); // 5
    };
    innerArrow();
}
outerLexical();

// Debugging notes:
// - When debugging, set breakpoints at the console.log lines to inspect the variable environment.
// - Hoisting creates separate memory slots for each function scope; inner's var shadows outer's var.
