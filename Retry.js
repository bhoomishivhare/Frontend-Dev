"use strict";
// Q8 - submitOrder fails 50% of time. processOrder tries up to 3 times.

function submitOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error("Network/Server error"));
      } else {
        resolve("Order accepted: " + JSON.stringify(order));
      }
    }, 500);
  });
}

async function processOrder(order) {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder(order);
      console.log(`Attempt ${attempt}: Success`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed - ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      // optional delay before retry
      await new Promise(r => setTimeout(r, 300));
    }
  }
}

(async () => {
  try {
    await processOrder({ items: ["book", "pen"], total: 199 });
  } catch (err) {
    console.error(err.message);
  }
})();
