class Trip {
    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw new Error("Invalid distance value");
        }
        return this.distance * 12; // ₹12 per km
    }
}

try {
    let trip1 = new Trip("Mathura", "Agra", 55);
    console.log("Fare:", trip1.calculateFare());

    let trip2 = new Trip("Delhi", "Noida", -10);
    console.log(trip2.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}
