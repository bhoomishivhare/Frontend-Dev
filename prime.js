function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is not Prime");
            return;
        }
    }
    console.log(num + " is Prime");
}

isPrime(17);
