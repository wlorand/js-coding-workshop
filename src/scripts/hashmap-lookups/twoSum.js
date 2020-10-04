/**
 * File: twoSum.js
 * Desc: the seminal two-sum js problem:
 *      - given an array of nums and a total k, write a fxn
 *      - that returns a two-elem array pair of nums that add up to total
 */

const myNums = [1, 2, 3];
const myTotal = 4;

const myAltNums = [3, 9, 12, 20];
const myAltTotal = 21;

// b: preferred hashmap solution

/**
 *
 * @param {nums[]} nums
 * @param {number} total
 * @returns {Array}
 */
function twoSum(nums, total) {
  // 1- keep track of previous values (ex key-value pair: 1: true)
  const prevValues = {};

  // 2- loop over the array (# todo: do better than index-based looping)
  for (let i = 0; i < nums.length; i++) {
    // 3A- assign as test for two sum based on the complement subtracted from the total
    // == trying to find the complement to nums[i] and the total
    // && know since num[i] + complement = total,
    //    can also write complement = total - nums[i]
    const complement = total - nums[i]; // ex: 3 = 4 - 1

    // 3B- if complement in previous values, we have a winner for current nums[i]
    if (prevValues[complement]) {
      // test for truthy value in the lookup obj
      // we have a winner, so return the array pair
      return [complement, nums[i]];
    }

    // 4- current array item now becomes a previous value
    prevValues[nums[i]] = true;
  }
}

// a: brute force nested loops  0(n) squared

function twoSumBruteForce(nums, total) {
  // do nested loops over the nums twice
  // 1st loop length - 1 --
  // don't need the last one as 2nd to last one will take care of it
  // 2nd (nested loop starts at i + 1 )
  // why? inner loop job starts after outer loop is using i=0
  // note: besides Big0 wackness, this is confusing algo
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      // here's the test
      if (nums[i] + nums[j] === total) {
        return [nums[i], nums[j]];
      }
    }
  }
}

// tests - invoke
// console.log(twoSumBruteForce(myNums, myTotal));
console.log(twoSum(myNums, myTotal));
console.log(twoSum(myAltNums, myAltTotal));
