"use strict";
// Q9 - Cart class that manages items and coupon validation

class Cart {
  constructor() {
    this.items = []; // {name, price, quantity}
  }

  addItem(name, price, quantity = 1) {
    this.items.push({ name, price: Number(price), quantity: Number(quantity) });
  }

  getTotal() {
    return this.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  }

  // coupon examples: SAVE20 => 20% off, DISC10 => 10% off
  applyCoupon(code) {
    // regex to match SAVE<number> or DISC<number>
    const couponRegex = /^(?:SAVE|DISC)(\d{1,2})$/i;
    const match = couponRegex.exec(code);
    if (!match) {
      throw new Error("Invalid coupon format. Use SAVE20 or DISC10.");
    }
    const percent = Number(match[1]);
    if (Number.isNaN(percent) || percent <= 0) throw new Error("Invalid coupon percent.");
    const total = this.getTotal();
    const discounted = +(total * (1 - percent / 100)).toFixed(2);
    return { original: total, percent, final: discounted };
  }
}

// Demo usage:
const myCart = new Cart();
myCart.addItem("Keyboard", 1200, 1);
myCart.addItem("Mouse", 600, 2);
myCart.addItem("Notebook", 120, 3);

console.log("Cart items:", myCart.items);
console.log("Cart total:", myCart.getTotal());

try {
  const couponResult = myCart.applyCoupon("SAVE20"); // valid example
  console.log(`Coupon applied: ${couponResult.percent}% off — Final total: ₹${couponResult.final}`);
} catch (err) {
  console.log("Coupon error:", err.message);
}
