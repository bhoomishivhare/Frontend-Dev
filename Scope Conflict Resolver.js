// Q1. Scope Conflict Resolver

let bonus = 5000; // global variable

function calculateSalary() {
    let salary = 40000;      // local variable
    let isPermanent = true;  // change this to false to test scope behaviour

    if (isPermanent) {
        let totalSalary = salary + bonus;
        console.log("Permanent Employee → Total Salary:", totalSalary);
    } else {
        console.log("Contract Employee → Salary:", salary);
    }
}

calculateSalary();
