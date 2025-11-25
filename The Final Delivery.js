"use strict";
// Q10 - Delivery pipeline: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each step returns a Promise with 1-2s delay and possible random failure.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1-2s
}

function step(name) {
  return new Promise((resolve, reject) => {
    console.log(`Starting step: ${name}`);
    setTimeout(() => {
      if (Math.random() < 0.12) {
        // 12% chance of failure
        reject(new Error(`${name} failed`));
      } else {
        console.log(`Completed step: ${name}`);
        resolve(`${name} done`);
      }
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    await step("Step 1: Order taken");      // takeOrder
    await step("Step 2: Food prepared");    // prepare
    await step("Step 3: Package ready");    // pack
    await step("Step 4: Out for delivery"); // dispatch
    await step("Step 5: Delivered");        // deliver
    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!", err.message);
  }
  console.log("Pipeline finished (either success or failure).");
}

runPipeline();

/*
Notes & explanation:
- Each awaited Promise pauses the async function until the Promise resolves or rejects.
- The event loop continues to process other events while awaiting; the async function yields.
- If any step rejects, control jumps to the catch block and the pipeline stops.
- This linear, top-to-bottom async/await structure makes control flow easier to reason about than nested callbacks.
*/
