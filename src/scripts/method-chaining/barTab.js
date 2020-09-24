/**
 * File: barTab.js
 * Desc: given a hefty eatery tab as [] of {} , write a fxn w/method chaining to calc the barTab
 */

const theDamage = [
  { type: 'Drink', price: 8.95 },
  { type: 'Entree', price: 24.5 },
  { type: 'Drink', price: 4.2666666 },
  { type: 'Appetizer', price: 8.95 },
  { type: 'Drink', price: 12.77 },
  { type: 'Dessert', price: 8.95 },
];

// method chain to calc barTab: filter, map, reduce, toFixed + return template literal
function calcBarTab(bill) {
  // 1- filter drinks
  const drinkTotal = bill
    .filter((item) => item.type === 'Drink')
    .map((drink) => drink.price)
    .reduce((total, price) => total + price)
    .toFixed(2);

  return `Your bartab is $${drinkTotal}.`;
}

// xtra fxn: howManyDrinks
function howManyDrinks(bill) {
  const howManyDrinks = bill.filter((item) => item.type === 'Drink').length;
  return `you drunkard, you had ${howManyDrinks} drinks at dinner tonite!`;
}

// Tests:
console.log(howManyDrinks(theDamage));
console.log(calcBarTab(theDamage));
