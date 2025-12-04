const products = [
    { id: 1, name: "Keyboard", category: "Electronics", price: 800, stock: 2 },
    { id: 2, name: "Shoes", category: "Fashion", price: 1200, stock: 10 },
    { id: 3, name: "Mouse", category: "Electronics", price: 600, stock: 3 },
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + (p.price * p.stock), 0);
}

function groupByCategory() {
    return products.reduce((group, p) => {
        group[p.category] = group[p.category] || [];
        group[p.category].push(p);
        return group;
    }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
