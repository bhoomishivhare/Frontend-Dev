// Q4. Academic Performance Evaluator

let marks = [85, 76, 90, 88, 70]; // 5 subjects

// check if any subject < 35 → auto detained
if (marks.some(m => m < 35)) {
    console.log("Detained");
} else {
    let total = marks.reduce((a, b) => a + b, 0);
    let percentage = total / marks.length;

    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}
