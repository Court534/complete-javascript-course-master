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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = [1],
    mainIndex = [0],
    time = ['20:00'],
    address,
  }) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      address
    );
  },

  // Create a function for ordering pasta with only three ingrediant
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sol, 21',
//   starterIndex: 1,
// });

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[2];
// const c = arr[3];

// Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Handy for renaming new variables from API calls
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: cat,
// } = restaurant;
// console.log(restaurantName, hours, cat);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);

// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const { fri } = restaurant.openingHours
// console.log(fri);

// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// Destructured array
// const [d, e, f] = arr;
// console.log(d, e, f); // OUTPUT: 1 2 3

// Lets take some code from the restaurant object above
// const [first, second] = restaurant.categories
// console.log(first, second); // OUTPUT: Italian Pizzeria

// If you need to skip an item
// const [first, , second] = restaurant.categories;
// console.log(first, second); // OUTPUT: Italian Vegetarian

// Destructuring 2 return values from the order function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// Nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j); // OUTPUT: 2 [ 5, 6 ]

// Destructuring on multiple levels
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // OUTPUT: 2 5 6

// Default values
// Imagine we have an array but we don't know how many items are inside
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // Rather that getting undefined, by including a third item that doens't exist (r) we return 1

// Spread operator

// Old way of adding to an existing array
// const array = [7, 8, 9];
// const badNewArray = [1, 2, array[0], array[1], array[2]];
// console.log(badNewArray);

// Newer was using the spread operator
// const newArray = [1, 2, ...array];
// console.log(...newArray);
// console.log(...array);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
// const newMainMenuArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMainMenuArray);

// The spread operator work in anthing interable
// const str = 'Courtney';
// const letters = [...str, ' ', 'S'];
// console.log(letters);
// console.log(...str);

// const ingrediants = [
//   prompt("Let's make pasta, Ingreients 1?"),
//   prompt("Let's make pasta, Ingreients 2?"),
//   prompt("Let's make pasta, Ingreients 3?"),
// ];
// console.log(ingrediants);
// restaurant.orderPasta(ingrediants);

// Spread operator on the right side of the =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr); // output [ 1, 2, 3, 4 ]

// Rest operator on the the left sode of the =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // output 1 2 [ 3, 4, 5 ]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// The fuction can take any numbers because of the ...numbers used in the argument of the function
// add(2, 3);
// add(2, 5, 4, 8, 10);

// const x = [23, 5, 7];
// add(x); // output: 023,5,7
// add(...x); // output: 35

// restaurant.orderPizza('Pepperoni', 'Onions', 'Chicken');
// restaurant.orderPizza('Pepperoni');

// Short-Circuiting (Use any data type, return any data type)
// It will always return first truthy value
// console.log(3 || 'Courtney'); // output: 3
// console.log('' || 'Courtney'); // output: Courtney
// console.log(true || 0); // output: true
// console.log(undefined || null); // output: null

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // output: 10 because numGuests doen't exist

// restaurant.numGuests = 25;
// const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests2); // output: 25 because numGuests now exists

// Practical exercise
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "sausage")
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "sausage")

// Nullish coalescing operator (??)
restaurant.numGuests = 25;
const guests = restaurant.numGuests ?? 10;
console.log(guests);
