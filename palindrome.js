function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");

    if (original === reversed)
        console.log(num + " is a Palindrome");
    else
        console.log(num + " is not a Palindrome");
}

isPalindrome(1221);
