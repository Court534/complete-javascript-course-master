'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[2];
const c = arr[3];

// Destructured array
const [d, e, f] = arr;
console.log(d, e, f); // OUTPUT: 1 2 3

// Lets take some code from the restaurant object above
// const [first, second] = restaurant.categories
// console.log(first, second); // OUTPUT: Italian Pizzeria

// If you need to skip an item
const [first, , second] = restaurant.categories;
console.log(first, second); // OUTPUT: Italian Vegetarian

// Destructuring 2 return values from the order function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j); // OUTPUT: 2 [ 5, 6 ]

// Destructuring on multiple levels
const [i, , [j, k]] = nested;
console.log(i, j, k); // OUTPUT: 2 5 6

// Default values
// Imagine we have an array but we don't know how many items are inside
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // Rather that getting undefined, by including a third item that doens't exist (r) we return 1