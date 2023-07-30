function isPalindrome(x) {
    let toString, toNumber, reversed;
    toString = String(x);
    reversed = toString.split('').reverse().join('');
    toNumber = Number(reversed);
    if (x === toNumber) {
        return true;
    }
    //'Is a Palindrome'
    else {
        return false;
    }
    //'Not a palindrome'
}
console.log(isPalindrome(-121));