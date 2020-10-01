/**
 * File: filterFruit3.js
 * Desc: given an array of fruit, filter out only the ones starting with 'a'
 */

const fruitBasket = ['apple', 'avo', 'banana', 'melon', 'orange', 'aphid'];

// Old School -- test indexOf() -- weak sauce

// String startsWith()
// const aFruits = fruitBasket.filter((fruit) => fruit.startsWith('a'));

// JS Strings are iterable so use [0] to rep starts with
const aFruits = fruitBasket.filter((fruit) => fruit[0] === 'a');

console.log(aFruits);
