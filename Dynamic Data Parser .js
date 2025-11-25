"use strict";
// Q1 - Dynamic Data Parser
// Convert mixed API values to Number, Boolean, and String form.
// Skip invalid numbers (NaN, " ", "100px") and collect valid/invalid arrays.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const report = []; // will hold details for each value

for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];
    // convert to string form
    const asString = String(raw);
    // convert to number
    const asNumber = Number(raw);
    // convert to boolean (JS rules)
    const asBoolean = Boolean(raw);

    // detect invalid numeric conversions: Number(...) yields NaN OR string that contains non-numeric characters
    // We'll declare numeric valid if Number(...) is finite (not NaN and isFinite)
    const isNumericValid = Number.isFinite(asNumber);

    // Additional check: pure whitespace should be treated as invalid numeric (Number(" ") -> 0 though)
    // Requirement said skip " " and "100px" — we explicitly treat " " as invalid.
    const rawTrim = (raw === null || raw === undefined) ? "" : String(raw).trim();
    const containsNonDigit = /^-?\d+(\.\d+)?$/.test(rawTrim) === false;

    // Final numeric validity decision
    const numericValid = isNumericValid && rawTrim !== "" && !/px$/i.test(String(raw)) && !/^\s+$/.test(String(raw)) && /^-?\d+(\.\d+)?$/.test(rawTrim);

    // Build entry for the report
    const entry = {
        index: i,
        raw: raw,
        asString,
        asNumber,
        asBoolean,
        numericValid
    };

    if (numericValid) {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push({ raw, reason: determineReason(raw, asNumber) });
    }

    report.push(entry);
}

// Helper to determine a human reason for invalids
function determineReason(raw, asNumber) {
    if (raw === null) return "null";
    if (raw === undefined) return "undefined";
    if (String(raw).trim() === "") return "empty/whitespace string";
    if (/px$/i.test(String(raw))) return "contains units (e.g., px)";
    if (Number.isNaN(Number(raw))) return "NaN or non-numeric";
    return "unknown";
}

// Print detailed report
console.log("=== Dynamic Data Parser Report ===");
report.forEach(r => {
    console.log(`Index ${r.index}: raw=`, r.raw, `| String="${r.asString}" | Number=${r.asNumber} | Boolean=${r.asBoolean} | numericValid=${r.numericValid}`);
});
console.log("\nValid numeric array:", validNumbers);
console.log("Invalid numeric entries:", invalidNumbers);
