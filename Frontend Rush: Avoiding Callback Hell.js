"use strict";
// Q5 - Pipeline: design -> build -> test -> deploy -> celebrate
// First: nested callbacks (callback hell), then async/await refactor.

// Helper: async stage that uses setTimeout to simulate 1s async work
function stage(name, cb) {
  setTimeout(() => {
    console.log(`Stage: ${name}`);
    cb && cb();
  }, 1000);
}

// --- Callback hell version (demonstration) ---
function runPipelineCallbacks() {
  stage("design", () => {
    stage("build", () => {
      stage("test", () => {
        stage("deploy", () => {
          stage("celebrate", () => {
            console.log("Pipeline complete (callbacks).");
          });
        });
      });
    });
  });
}

// Uncomment to run the callback-hell version
// runPipelineCallbacks();

// --- Cleaner version with Promises + async/await ---
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Stage: ${name}`);
      resolve(name);
    }, 1000);
  });
}

async function runPipelineAsync() {
  // async/await improves readability by allowing linear, top-to-bottom code.
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline complete (async/await).");
  } catch (err) {
    console.error("Pipeline failed:", err);
  }
}

// Run the async/await pipeline
runPipelineAsync();

/*
Comment: Callback hell nests callbacks and quickly becomes hard to read and maintain.
Async/await flattens the flow and uses try/catch for errors, making it much cleaner.
*/
