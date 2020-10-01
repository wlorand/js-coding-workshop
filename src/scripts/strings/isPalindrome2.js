/**
 * File: isPalindrome2.js
 * Desc: write a fxn that tests whether two strings are plaindrome
 *  ( recall palindrome is a word that is same backwards and forwards)
 */

const yesPalindrome = 'racecar';
const notPalindrome = 'god';

/* @param {string}
 * @returns {boolean}
 */

function isPalindrome(str) {
  return str === [...str].reverse().join('');
}

// Tests
console.log(isPalindrome(yesPalindrome)); // true
console.log(isPalindrome(notPalindrome)); // false
