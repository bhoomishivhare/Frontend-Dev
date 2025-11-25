// Q9: ES6 class inheritance
"use strict";

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // call Person constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const s2 = new Student("Aditya", "CSE");
s2.showName();
s2.showBranch();
