"use strict";
// Q6 - Fetch products from Fake Store API and log title, price, image.
// Use async/await + try/catch. Bonus: create DOM cards if document exists.

async function fetchProducts() {
  const url = "https://fakestoreapi.com/products";
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Network response not ok");
    const products = await resp.json();

    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("---");
    });

    // Bonus: create product cards if running in browser
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.style.display = "grid";
      container.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
      container.style.gap = "12px";
      container.style.margin = "12px";
      products.forEach(p => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.padding = "8px";
        card.style.boxSizing = "border-box";
        card.style.borderRadius = "6px";
        const img = document.createElement("img");
        img.src = p.image;
        img.style.width = "100%";
        img.style.height = "150px";
        img.style.objectFit = "contain";
        const title = document.createElement("div");
        title.textContent = p.title;
        title.style.fontSize = "14px";
        title.style.margin = "8px 0";
        const price = document.createElement("div");
        price.textContent = "$" + p.price;
        price.style.fontWeight = "bold";
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        container.appendChild(card);
      });
      document.body.appendChild(container);
    }

  } catch (err) {
    console.error("Failed to load products. Please try again.", err.message);
  }
}

// Call fetchProducts (works in browser; Node requires global fetch)
fetchProducts();
