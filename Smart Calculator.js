"use strict";
// Q7 - Smart Calculator with custom errors

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // test values

class InvalidOperationError extends Error {
    constructor(op) {
        super(`Invalid operation: ${op}`);
        this.name = "InvalidOperationError";
    }
}

try {
    function calculate(op, a, b) {
        switch (op) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "divide":
                if (b === 0) throw new RangeError("Divide by zero");
                return a / b;
            case "power":
                return Math.pow(a, b);
            case "root":
                if (a < 0) throw new RangeError("Root of negative number");
                return Math.pow(a, 1 / b); // b-th root
            default:
                throw new InvalidOperationError(op);
        }
    }

    // Try each operation from the list and print results
    for (let op of operations) {
        try {
            const result = calculate(op, num1, num2);
            console.log(`Operation: ${op} | Result: ${result}`);
        } catch (innerErr) {
            console.log(`Operation: ${op} | Error: ${innerErr.name} - ${innerErr.message}`);
        }
    }

} catch (err) {
    console.log("Unexpected error in calculator:", err);
}
