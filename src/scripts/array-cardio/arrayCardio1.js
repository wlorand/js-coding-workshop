/**
 * File: arrayCardio4.js
 * Desc: array cardio class revisited with trainer Wes Bos
 */

/* PART I: Questions 1-4 */

// Inventors as [] of {} -- typical Web App dataset
const inventors = [
  { first: 'Albert', last: 'Einstein', born: 1879, died: 1955 },
  { first: 'Isaac', last: 'Newton', born: 1643, died: 1727 },
  { first: 'Galileo', last: 'Galilei', born: 1564, died: 1642 },
  { first: 'Marie', last: 'Curie', born: 1867, died: 1934 },
  { first: 'Johannes', last: 'Kepler', born: 1571, died: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', born: 1473, died: 1543 },
  { first: 'Max', last: 'Planck', born: 1858, died: 1947 },
  { first: 'Katherine', last: 'Blodgett', born: 1898, died: 1979 },
  { first: 'Ada', last: 'Lovelace', born: 1815, died: 1852 },
  { first: 'Sarah E.', last: 'Goode', born: 1855, died: 1905 },
  { first: 'Lise', last: 'Meitner', born: 1878, died: 1968 },
  { first: 'Hanna', last: 'Hammarström', born: 1829, died: 1909 },
];

/* TODO: BONUS QU #5 -- What's the average lifespan of these inventors? */

/* QU #4: How many years did all of the inventors live? */
// Dev Strategy: use reduce to total up all the diffs betw died - born
const inventorTotalYrs = inventors.reduce(
  (total, inventor) => total + (inventor.died - inventor.born),
  0 // don't forget the starting value, fool!
);
console.log(inventorTotalYrs);

/* QU 3. Sort the inventors by birthdate, oldest to youngest */
// Dev Strategy: use Array.sort() but use spread to avoid mutating the array
const sortedInventors = [...inventors].sort((a, b) =>
  a.born > b.born ? 1 : -1
);
console.log(sortedInventors);

/* QU 2. Give us an array of the inventors' first and last names */
// Dev Strategy: .map to return just certain fields
const inventorNames = inventors.map(
  (inventor) => `${inventor.last}, ${inventor.first}`
);
console.log(inventorNames);

/* QU 1. Filter the list of inventors for those who were born in the 1500's */
const bornInThe1500s = inventors.filter(
  (inventor) => inventor.born >= 1500 && inventor.born < 1600
);
console.log(bornInThe1500s);
