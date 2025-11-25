// Q2. String Manipulation Report

let product = " wireless headphones PRO ";

// trim spaces → lowercase
product = product.trim().toLowerCase();

// capitalize first letter of each word
product = product
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// replace pro with Pro Edition
product = product.replace("Pro", "Pro Edition");

// length of final title
console.log("Clean Title:", product);
console.log("Length:", product.length);
