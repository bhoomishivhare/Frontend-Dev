// Q4. Array Performance Analyzer

// generate 8 random scores between 30–100
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((a, b) => a + b, 0) / scores.length;

let passed = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Number Passed:", passed);
