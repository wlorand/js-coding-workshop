/**
 * File: mostCommonWord3.js
 * Desc: given a str sentence, return the most common word
 */

const sentence = 'hello world Hello sky sky Sky world world World';
const digits = 33;

/*
 * @param {string}
 * @returns {string}
 */
function getMostCommonWord(str) {
  // 0-check your data: js as loosely typed (or make this TypeScript)
  if (typeof str !== 'string') return 'Error, please pass a string';

  // 1- create a lookup object to store the count of words
  const wordLookupObj = str
    .toLowerCase()
    .split(' ')
    .reduce((wordObj, word) => {
      wordObj[word] ? (wordObj[word] += 1) : (wordObj[word] = 1);
      return wordObj;
    }, {});

  // 2- loop thru the object and find the most common word
  let maxCount = 1;
  let mostCommonWord = '';

  for (let [key, value] of Object.entries(wordLookupObj)) {
    if (value > maxCount) {
      maxCount = value;
      mostCommonWord = key;
    }
  }
  return mostCommonWord;
}

// tests
// console.log(getMostCommonWord(digits));
console.log(getMostCommonWord(sentence));
