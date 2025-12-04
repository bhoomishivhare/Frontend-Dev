class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} team.`;
    }
}

let e1 = new Employee("Riya", "IT");
let m1 = new Manager("Arjun", "Development");

console.log(e1.work());
console.log(m1.work());
