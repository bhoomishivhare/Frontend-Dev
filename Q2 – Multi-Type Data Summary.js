// Q2. Multi-Type Data Summary

let userName = "Aditya";          // string
let age = 20;                     // number
let isLoggedIn = true;            // boolean
let hobbies = ["coding", "gym"];  // array
let userDetails = { city: "Delhi", rank: 5 }; // object
let emptyValue = null;            // null
let notAssigned;                  // undefined

console.table([
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isLoggedIn", value: isLoggedIn, type: typeof isLoggedIn },
    { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "userDetails", value: userDetails, type: typeof userDetails },
    { label: "emptyValue", value: emptyValue, type: typeof emptyValue },
    { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
]);
