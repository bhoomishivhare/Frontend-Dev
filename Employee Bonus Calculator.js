"use strict";
// Q2 - Employee Bonus Calculator
// Convert salary & years to numbers, compute bonus, use try...catch for safety.

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let emp of employees) {
    try {
        // strict mode prevents accidental globals
        if (!emp.name || emp.salary == null || emp.years == null) {
            throw new Error(`Missing property for employee: ${JSON.stringify(emp)}`);
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new TypeError(`Conversion failed for ${emp.name}: salary or years not a number`);
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);

    } catch (err) {
        console.log(`Error processing employee ${emp && emp.name ? emp.name : JSON.stringify(emp)} ->`, err.message);
    }
}
