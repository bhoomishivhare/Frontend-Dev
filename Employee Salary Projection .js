// Q8. Salary Projection for 5 Years

let salary = 35000;
let incrementRate = 10; // %

let table = [];

for (let year = 1; year <= 5; year++) {
    salary += (salary * incrementRate) / 100;
    table.push({ Year: year, Salary: Math.round(salary) });
}

console.table(table);
