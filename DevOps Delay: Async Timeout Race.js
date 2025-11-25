"use strict";
// Q4 - Two servers: use Promise.all and Promise.race
// Server A: 2s, Server B: 3s. Random failure simulated.

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Server A failed"));
      resolve("Server A response (2s)");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Server B failed"));
      resolve("Server B response (3s)");
    }, 3000);
  });
}

// All
Promise.all([serverA(), serverB()])
  .then(responses => {
    console.log("Deployment completed for all servers:", responses);
  })
  .catch(err => {
    console.error("Deployment failed (Promise.all):", err.message);
  });

// Race
Promise.race([serverA(), serverB()])
  .then(fast => {
    console.log("Fastest response:", fast);
  })
  .catch(err => {
    console.error("Fastest response error (Promise.race):", err.message);
  });
