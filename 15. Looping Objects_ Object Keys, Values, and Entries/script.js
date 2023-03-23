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

// So we learned about the for of loop to loop over an array, which remember is an Iterable, but we can also loop over objects, which are not Iterable, but in an indirect way.

// Now we have different options here, depending on what exactly we want to loop over.

// So do we want to loop over the objects, property names over the values or both together.

// And let's start by simply looping over property names. And so remember they are also called keys.

// Now, ultimately we will still have to use the for of loop to loop over the array, but again, we're going to do that in an indirect way. So we're not actually looping over the object itself. Instead, we're going to loop over, an array.

// Property Names
const properties = Object.keys(openingHours);
console.log(properties); // (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr); // We are open on 3 days: thu, fri, sat,

// Property Values
const values = Object.values(openingHours);
console.log(values); // [{…}, {…}, {…}]

// So before we had the keys, now we have the values and there no needs to now loop over them again, because it's going to work exactly the same as here.

// But now to really simulate, to loop over the entire object, we actually need the entries. And so entries is basically names plus the values together. And we already saw the entries before.

// So when we looped over the array And so the entries returned the index number and the element itself.

// And so we can do something similar on objects and that will then also return the key and the value.

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries); // [Array(2), Array(2), Array(2)]

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
