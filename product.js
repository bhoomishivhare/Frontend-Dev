function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

// Create products
let p1 = new Product("Laptop", 50000);
let p2 = new Product("Phone", 20000);
let p3 = new Product("Watch", 5000);

console.log("Discounted Price:", p1.applyDiscount(10));
console.log("Discounted Price:", p2.applyDiscount(15));
console.log("Discounted Price:", p3.applyDiscount(20));
