function checkPalindrome(value){
    
    return value.toString().split('').reverse().join('') === value.toString();
}

console.log(checkPalindrome(123));