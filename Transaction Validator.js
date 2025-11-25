"use strict";
// Q3 - Transaction Validator
// Throw custom errors for negative amount, missing fields, or null entry.
// Categorize valid and invalid transactions.

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = "TransactionError";
        this.type = type; // e.g. "NegativeAmount", "MissingField", "NullEntry"
    }
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    try {
        if (t === null) throw new TransactionError(`Null transaction at index ${i}`, "NullEntry");
        if (typeof t !== "object") throw new TransactionError(`Invalid type at index ${i}`, "InvalidType");
        if (t.id == null) throw new TransactionError(`Missing id for transaction at index ${i}`, "MissingField");
        if (t.amount == null) throw new TransactionError(`Missing amount for transaction id ${t.id}`, "MissingField");
        if (typeof t.amount !== "number") throw new TransactionError(`Amount not a number for id ${t.id}`, "InvalidType");
        if (t.amount < 0) throw new TransactionError(`Negative amount for id ${t.id}`, "NegativeAmount");

        // Passed all checks
        valid.push(t);

    } catch (err) {
        // Catch and categorize
        if (err instanceof TransactionError) {
            invalid.push({ index: i, error: err.type, message: err.message });
        } else {
            invalid.push({ index: i, error: "Unknown", message: err.message });
        }
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Summary: successful=${valid.length}, failed=${invalid.length}`);

// NOTE: When debugging in an IDE, add breakpoints inside the try/catch to inspect 't' and errors.
