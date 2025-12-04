const menu = {
    pizza: 200,
    burger: 120,
    pasta: 180,
    fries: 90
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error("Item not available: " + item);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        console.log("Total Bill:", total);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

calculateBill(["pizza", "pasta"]);
calculateBill(["fries", "momow"]); // invalid item
