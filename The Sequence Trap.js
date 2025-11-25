"use strict";
// Q5 - Hoisting Lab: explain and fix.
// Original snippet had hoisting issues. We'll explain, fix and show arrow function version.

// --- Explanation (comments):
// - function declarations are hoisted (announce, startGame available before definition).
// - var declarations are hoisted but initialized to undefined at the top of their scope.
// - let/const are hoisted but are in Temporal Dead Zone (TDZ) until initialized; accessing throws ReferenceError.

// ORIGINAL (problematic) pseudocode:
// console.log(score);            // score is declared later with var -> prints undefined (hoisted)
// announce();                    // function hoisted -> works
// var score = 50;                // assignment after use
// function announce() { ... }
// let status = "ready";
// startGame();                    // startGame hoisted -> works
// function startGame() { console.log(status); } // BUT status is declared with let before call -> fine

// Fixed code (clear order) — safe to run:
var score = 50;
console.log("score after declaration:", score);

function announce() {
    console.log("Game started");
}
announce();

let status = "ready";
function startGame() {
    console.log("status inside startGame:", status);
}
startGame();

// Arrow-function rewrite to compare hoisting
// Arrow functions assigned to const/let are NOT hoisted like function declarations:
const announceArrow = () => console.log("Game started (arrow)");
announceArrow();

const startGameArrow = () => console.log("status inside startGameArrow:", status);
startGameArrow();

// Hoisting summary:
// - function declarations: hoisted and callable before their textual location.
// - var: declaration hoisted, initialized to undefined until assignment.
// - let/const: hoisted but in TDZ — accessing before initialization throws ReferenceError.
// - arrow functions assigned to const/let: no hoisted callable value (TDZ applies).
