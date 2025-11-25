"use strict";
// Q3 - Convert callback-based fetchBugs to Promise-based getBugs

// Old callback version (for reference)
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.2; // 20% failure chance
      if (fail) return reject(new Error("API Error: failed fetching bugs"));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bugs fetched:");
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch(err => {
    console.error("Failed to get bugs:", err.message);
  });
