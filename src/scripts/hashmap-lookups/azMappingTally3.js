/**
 * File: azMappingTally3.js
 * Desc: write a fxn that takes a str and returns the sum of its
 *    letters, given a mapping where a=1, z=26; ex: 'ace' returns 9
 */

// TODO: use RegExp to generate an a-z string ?
const azString = 'abcdefghijklmnopqrstuvwxyz';
const azLookupObj = [...azString].reduce((azObj, letter, i) => {
  azObj[letter] = i + 1; // account for zero-indexing
  return azObj;
}, {});

/**
 *
 * @param {string} str
 * @returns {number}
 */
function azMappingTally3(str) {
  // loop thru string and tally the letter nums
  const strSum = [...str].reduce((total, letter) => {
    total += azLookupObj[letter];
    return total;
  }, 0);

  return strSum;
}

// Tests
// console.table(azLookupObj);
console.log(azMappingTally3('ace')); // 9
console.log(azMappingTally3('yyz')); // 76
