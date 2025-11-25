"use strict";
// Q8 - Strict Mode Showdown
// Original bad code:
// function demo(a, a) { total = 10; delete total; } demo(5,10);
//
// Problems under strict mode:
// - Duplicate parameter names are a SyntaxError in strict mode.
// - Assigning to undeclared variable 'total' throws ReferenceError in strict mode.
// - delete total is illegal for normal identifiers; delete only works on object properties.

console.log("Running demo with strict mode - this will be shown as the corrected version below.");

// Correct version using ES6 rules:
function demoCorrect(a, b) {
    // properly declared variable
    let total = 10;
    // deleting local variable is meaningless; if we need removable property, keep it on an object:
    const container = { total }; // container.total = 10
    delete container.total; // allowed: delete object property
    console.log("a:", a, "b:", b, "container after delete:", container);
}

demoCorrect(5, 10);

// Notes to compare behavior:
// - Without "use strict", duplicate params and implicit globals might silently work (but are dangerous).
// - With "use strict", JS enforces safer semantics: no implicit globals, no duplicate parameter names.
