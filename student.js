class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();
        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 60) return "C";
        else return "F";
    }
}

// Test for 3 students
let s1 = new Student("Alice", [89, 92, 95]);
let s2 = new Student("Bob", [70, 68, 72]);
let s3 = new Student("Charlie", [50, 45, 60]);

console.log(s1.name, "Grade:", s1.getGrade());
console.log(s2.name, "Grade:", s2.getGrade());
console.log(s3.name, "Grade:", s3.getGrade());
