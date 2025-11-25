// Q6. Event-Based Counter Simulation

let count = 0; // global counter

function increment() {
    function update() {
        count++;
        console.log("Count:", count);
    }
    update(); // nested function demonstrates scope
}

function decrement() {
    function update() {
        count--;
        console.log("Count:", count);
    }
    update();
}

// simulate clicks
increment();
increment();
decrement();
