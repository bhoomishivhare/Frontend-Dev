function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    console.log("Largest value:", max);
}

largest([12, 45, 67, 23, 89, 34]);
