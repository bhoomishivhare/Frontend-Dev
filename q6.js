"use strict";
// Q6 - Employee class with methods and company payout calculation

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = Number(salary);
  }

  getAnnualSalary() {
    return +(this.salary * 12).toFixed(2);
  }

  applyBonus(percent) {
    if (typeof percent !== "number" || percent < 0) {
      throw new Error("Invalid bonus percent");
    }
    this.salary = +(this.salary * (1 + percent / 100)).toFixed(2);
  }

  display() {
    return `${this.name} (${this.department}) — Monthly ₹${this.salary.toFixed(2)} — Annual ₹${this.getAnnualSalary()}`;
  }
}

// create 5 employees
const employees = [
  new Employee(1, "Asha", "HR", 35000),
  new Employee(2, "Ravi", "Tech", 55000),
  new Employee(3, "Neha", "Finance", 48000),
  new Employee(4, "Vikram", "Support", 30000),
  new Employee(5, "Priya", "Tech", 60000)
];

// apply a small bonus to everyone as demonstration
employees.forEach(emp => emp.applyBonus(5)); // 5% bonus to monthly salary

// print annual salary for each
employees.forEach(emp => console.log(emp.display()));

// total annual payout using reduce
const totalAnnualPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("\nTotal Annual Payout for company: ₹" + totalAnnualPayout.toFixed(2));
