"use strict";
// Q1 - Product class, discount and filtering

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  // apply percentage discount (e.g., percent=10 => reduce price by 10%)
  applyDiscount(percent) {
    if (typeof percent !== "number" || percent < 0) {
      throw new Error("Invalid discount percent");
    }
    this.price = +(this.price * (1 - percent / 100)).toFixed(2);
  }

  // formatted string for display
  displayDetails() {
    return `Product [${this.id}] ${this.name} — ₹${this.price.toFixed(2)} (${this.category})`;
  }
}

// create products and store in array
const products = [
  new Product(1, "Wireless Headphones", 2500, "electronics"),
  new Product(2, "Cotton T-Shirt", 499, "fashion"),
  new Product(3, "Smartphone", 15000, "electronics"),
  new Product(4, "Notebook", 120, "stationery")
];

// apply a sample discount to one product
products[0].applyDiscount(10); // 10% off on first product

console.log("All products:");
products.forEach(p => console.log(p.displayDetails()));

// Display products with price > 1000
const premiumProducts = products.filter(p => p.price > 1000);
console.log("\nProducts with price > 1000:");
premiumProducts.forEach(p => console.log(p.displayDetails()));
