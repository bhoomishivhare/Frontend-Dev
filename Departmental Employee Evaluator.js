// Q10. Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let dept of departments) {
    let name = dept[0];
    let score = dept[1];
    let result = "";

    if (score >= 90) result = "Excellent";
    else if (score >= 75) result = "Good";
    else if (score >= 60) result = "Average";
    else result = "Needs Improvement";

    console.log(`${name}: ${result}`);
}
