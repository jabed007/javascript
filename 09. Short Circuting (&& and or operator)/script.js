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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderFizza: function (mainIngredients, ...otherIngridents) {
    console.log(mainIngredients);
    console.log(otherIngridents);
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

// So there are three properties about logical operators o first, they can use any data type. They can return any data type and they do something called short circuiting, or as we also call it short circuit evaluation.

// So in fact, here we used two values that are not Booleans, okay? And it then returned a value that was not a Boolean.

// short circuiting means that if the first value is a truthy value, it will immediately return that first value.

// Use any data type, return any data type,  short-circuting
console.log(3 || 'Jonas'); // 3

// So again, if the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. So JavaScript will not even take a look at it. And so that's what we mean with short circuiting.

console.log('------OR------');
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('------AND------');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas');

// Practical Example
if (restaurant.orderFizza) {
  restaurant.orderFizza('mushrooms', 'spinach');
}

restaurant.orderFizza && restaurant.orderFizza('mushrooms', 'spinach');
