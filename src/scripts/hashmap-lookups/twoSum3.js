/**
 * File: twoSum3.js
 * Desc: given an arr of nums and a total,
 *      return the pair that sum to the total (assumes there is solution)
 */

const myNums = [1, 2, 3];
const myTotal = 4;
const myAltNums = [1, 3, 9, 12];
const myAltTotal = 21; // future use for blackjack!

/**
 *
 * @param {number[]} nums
 * @param {number} total
 * @returns {number[]} or {object}
 */

function twoSum(nums, total) {
  // 1- create var to hold seenValues
  const seenValues = {}; // ex: {1: true}

  // 2- do one loop over the nums[] - no nested loops here - bad Big[0]
  for (let i = 0; i < nums.length; i++) {
    // 3- create var for the complement key value (since num + complement = total)
    const complement = total - nums[i];

    // 4- if current num satisfies the complement equation, we have a winner
    if (seenValues[complement]) return [complement, nums[i]];

    // 5- now assign current num to seenValues
    seenValues[nums[i]] = true;
  }

  return `no match: we finished the loop with these seen values: ${JSON.stringify(
    seenValues
  )}`;
}

// tests / invoke
console.log(twoSum(myNums, myTotal)); // [1,3]
console.log(twoSum(myAltNums, myAltTotal)); // [9,12]
console.log(twoSum(myAltNums, 76)); // returns { ... }
