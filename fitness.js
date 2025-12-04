class FitnessAnalytics {
    constructor(data) {
        if (data.length === 0) throw new Error("Dataset is empty!");
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        return this.data.reduce((sum, u) => sum + u.calories, 0) / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u => `${u.user} burned ${u.calories} calories`);
    }
}

const users = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

let fitness = new FitnessAnalytics(users);
console.log(fitness.getActiveUsers());
console.log(fitness.getAverageCalories());
console.log(fitness.getUserSummary());
