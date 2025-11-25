// Q3. Monthly Expense Tracker

let expenses = [3000, 1200, 8000, 2500, 1500]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;

let tax = total * 0.10; // 10%
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After 10% Tax:", finalAmount.toFixed(2));
