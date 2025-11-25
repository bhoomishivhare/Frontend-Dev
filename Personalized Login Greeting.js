// Q1. Personalized Login Greeting

let userName = "Aditya"; // your name
let currentHour = new Date().getHours(); // get the current hour

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
