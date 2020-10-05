/**
 * File: barTab3.js
 * Desc: given an [] of {} for a nite out, tally the barTab
 *     (designed to test work on [] of {} and Array method chaining)
 */

const theDamage = [
  { itemType: 'Drink', price: 9.49 },
  { itemType: 'Drink', price: 5.75 },
  { itemType: 'Appetizer', price: 10.5 },
  { itemType: 'Entree', price: 22.95 },
  { itemType: 'Entree', price: 18.25 },
  { itemType: 'Drink', price: 36.36666 },
  { itemType: 'Dessert', price: 8.95 },
  { itemType: 'Drink', price: 8.95 },
];

function calcBarTab(theCheck) {
  // 1- filter out only the Drinks
  const drinkItemTotal = theCheck
    .filter((item) => item.itemType === 'Drink')
    .map((drink) => drink.price)
    .reduce((total, price) => (total += price), 0)
    .toFixed(2);

  return `hey buddy, pay your drink tab of $${drinkItemTotal} before we go any further!`;
}

// tests / invoke
console.log(calcBarTab(theDamage));
