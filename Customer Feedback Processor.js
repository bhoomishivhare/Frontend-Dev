// Q7. Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

// count words
let wordCount = feedback.split(" ").length;

// check negativity keywords
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

console.log("Words:", wordCount);

if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
