// Q1: Callback flow demo
"use strict";

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Execute callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// calling
greetUser("Aditya", showEndMessage);
