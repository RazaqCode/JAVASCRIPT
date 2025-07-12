let word = "madam";
let isPalindrome = word === word.split('').reverse().join('');
console.log(isPalindrome ? "Palindrome" : "Not a Palindrome");
