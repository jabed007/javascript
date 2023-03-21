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

  orderDelivery: function ({
    address,
    time = '20:20',
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
  time: '20:00',
  address: 'xyz',
});

restaurant.orderDelivery({ address: 'abc', starterIndex: 1 });

///////////////////////////////////////////
//////// Destructuring Object//////////////
//////////////////////////////////////////
// Destructuring object is very helpful when we deal with the result of an API call, which basically means to get data from another web application, like waether data or data about movies or something like that and this data usually comes in the form of objects basically. and destructuring is really a lifesaver.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// What if we wanted the variable names to be different from the property names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
/*
const { fri } = openingHours;
console.log(fri);
*/

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////////////
/////////// Destructuring Array///////////
/////////////////////////////////////////
const arr = [1, 2, 3];
const aa = arr[0];
const bb = arr[1];
const cc = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first1, , second1] = restaurant.categories;
// console.log(first1, second1);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, temp);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////////////////////////////
//////////// The spread operator//////////
/////////////////////////////////////////

// We can use spread operator to basically expand an array into all its elements. so basically unpacking all the array elements at one.

const array = [7, 8, 9];
