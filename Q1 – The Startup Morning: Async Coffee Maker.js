"use strict";
// Q1 - Async Coffee Maker
// Steps: boilWater -> brewCoffee -> pourCoffee
// Each step returns a Promise that resolves after 1-2 seconds.
// Random failure simulated with Math.random().

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1000-1999 ms
}

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Boiling failed"));
      console.log("Water boiled.");
      resolve("boiled water");
    }, randomDelay());
  });
}

function brewCoffee(boiled) {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee with:", boiled);
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Brewing failed"));
      console.log("Coffee brewed.");
      resolve("brewed coffee");
    }, randomDelay());
  });
}

function pourCoffee(brewed) {
  return new Promise((resolve, reject) => {
    console.log("Pouring coffee into cup:", brewed);
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error("Pouring failed"));
      console.log("Coffee poured.");
      resolve("coffee ready");
    }, randomDelay());
  });
}

// Use promise chaining
boilWater()
  .then(result => brewCoffee(result))
  .then(result => pourCoffee(result))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch(err => {
    console.error("Coffee process failed:", err.message);
  });
