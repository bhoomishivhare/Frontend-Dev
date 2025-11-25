// Q3. Math Utility Dashboard

let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10; // 10–50

console.log(`
Math Dashboard Summary:
-----------------------
Rounded: ${rounded}
Square Root: ${squareRoot}
Power (x^3): ${power}
Random (10–50): ${random}
`);
