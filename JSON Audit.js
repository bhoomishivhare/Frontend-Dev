"use strict";
// Q9 - JSON Audit
// Parse array of JSON strings, detect missing keys and invalid JSON.
// Convert age to Number, filter under-18 users.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
        const obj = JSON.parse(line);

        // Validate required keys: user and age
        if (!obj.hasOwnProperty("user") || !obj.hasOwnProperty("age")) {
            throw new Error(`Missing key(s) at line ${i}: required 'user' and 'age'`);
        }

        // convert age to number
        obj.age = Number(obj.age);
        if (Number.isNaN(obj.age)) throw new TypeError(`Invalid age at line ${i}`);

        clean.push(obj);
    } catch (err) {
        errors.push({ line: i, raw: line, message: err.message });
    }
}

console.log("Clean entries:", clean);
console.log("Errors:", errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
console.log("Adults (age >= 18):", adults);
