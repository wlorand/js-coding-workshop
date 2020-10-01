/**
 * File: bestObjIterate.js
 * Desc: iterate over one-level-deep object and log all keys, values, dtypes
 */

const bestPicture = {
  title: 'Vertigo',
  rank: 1,
  cast: ['novak', 'stewart'],
  isHitch: true,
};

// iterate over the Singleton - prefer for..of over for..in
for (let [key, value] of Object.entries(bestPicture)) {
  console.log(`key is ${key}, value is ${value} and dtype is ${typeof value}`);
}
