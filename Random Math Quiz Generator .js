// Q9. Random Math Quiz Generator

let n1 = Math.floor(Math.random() * 20) + 1;
let n2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let op = operators[Math.floor(Math.random() * operators.length)];

let answer;

switch (op) {
    case '+': answer = n1 + n2; break;
    case '-': answer = n1 - n2; break;
    case '*': answer = n1 * n2; break;
    case '/': answer = (n1 / n2).toFixed(2); break;
}

console.log(`Question: ${n1} ${op} ${n2}`);
console.log(`Correct Answer: ${answer}`);
