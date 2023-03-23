'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 2}`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderFizza(mainIngredients, ...otherIngridents) {
    console.log(mainIngredients);
    console.log(otherIngridents);
  },
};

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0
console.log('B737'[0]); // B

console.log(airLine.length); // 16
console.log('B737'.length); // 4

// string methods
console.log(airLine.indexOf('r')); // 6
console.log(airLine.lastIndexOf('r')); // 10
console.log(airLine.indexOf('Portugal')); // 8
console.log(airLine.indexOf('portugal')); // -1

// Slicing string
console.log(airLine.slice(4)); // Air Portugal
console.log(airLine.slice(4, 7)); // Air

// Extract the first word of a string
console.log(airLine.slice(0, airLine.indexOf(' '))); // TAP

// Extract the first word of a string
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); // Portugal

console.log(airLine.slice(-2)); // al
console.log(airLine.slice(1, -1)); // AP Air Portuga

// Real Life Example
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  //console.log(s);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat (:');
  } else {
    console.log('You got lucky :)');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas')); // object
console.log(typeof new String('Jonas').slice(1)); // string
