"use strict";
// Q4 - Debugging Mystery
// The original code threw because assigning to an undeclared variable is illegal in strict mode.
// Fix: declare the variable explicitly.

function showMessage() {
    // In strict mode, this would have thrown: ReferenceError: greeting is not defined
    // because "greeting = 'Welcome'" creates an implicit global in non-strict mode.
    // Fix by declaring the variable in scope (let/const/var).
    let greeting = "Welcome";
    console.log("Greeting inside function:", greeting);
}

showMessage();

// Debugging note: set a watch on 'greeting' in VSCode inside the function and observe the call stack.
// The bug stemmed from accidental global creation in sloppy mode; strict mode prevents that.
