// Q7: Closure multiplier
"use strict";

function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;  // closure uses 'multiplier'
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
