// Q4: Constructor + Prototype method
"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`${this.brand} - ${this.model}`);
};

const car1 = new Car("BMW", "X5");
const car2 = new Car("Audi", "Q7");

car1.getDetails();
car2.getDetails();
