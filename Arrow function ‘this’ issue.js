// Q3: Arrow function issue
"use strict";

const user = {
    name: "Aditya",
    showName: () => {
        console.log(this.name); // undefined → arrow doesn't bind its own 'this'
    }
};

user.showName(); // undefined

// Fix using normal function
user.showName = function() {
    console.log(this.name); // Works
};

user.showName(); 
