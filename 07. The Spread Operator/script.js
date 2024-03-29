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

////////////////////////////////////////////////////////////////
////////////////// SPREAD OPERATOR ////////////////////////////
//////////////////////////////////////////////////////////////

// we can use the spread operator to basically expand an array into all its elements.
// So basically unpacking all the array elements at one.

// So let's say that we have an array,
// And now we want to create a new array based on this array but with some new elements at the beginning.
// So how would we do that? Well, with what we already know, we would need to loop over this array, or even worse, do it manually.

// LETS WE HAVE AN ARRAY
const arr = [7, 8, 9];

// NOW WE WANT TO CREATE A NEW ARRAY BASED ON THIS ARRAY
// BUT WITH SOME NEW ELEMENTS AT THE BEGINNING
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr); // output: [1, 2, 3, 7, 8, 9]

// WITHOUT SPREAD OPERATOR
const badNewArr2 = [1, 2, 3, arr];
console.log(badNewArr2); // output: [1, 2, 3, Array(3)] / [1, 2, 3, [7, 8, 9]]

// WE CAN DO THIS USING SPREAD OPERATOR EASILY
const goodNewArr = [1, 2, 3, ...arr]; // [1, 2, 3, ...arr] = [1, 2, 3, 7, 8, 9]
console.log(goodNewArr); // output: [1, 2, 3, 7, 8, 9]

// So what the spread operator does is to basically take all the values out of this arr. array, and then write them individually as if we wrote seven, eight, nine here manually.

// NOTE: We can use the spread operator whenever we would otherwise write multiple values separated by commas and that situation happens whenever we write an array literal like we did up here thats the first situation which we it is very useful to expand an array and the second situation is when we pass arguments into functions

console.log(goodNewArr); // output: [1, 2, 3, 7, 8, 9]
console.log(...goodNewArr); // output: 1, 2, 3, 7, 8, 9
// console.log(...goodNewArr) === console.log(1, 2, 3, 7, 8, 9)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// NOTE: Now you might have noticed that the spread operator is actually a bit similar to destructuring, because it also helps us get elements out of arrays. Now, the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables. And as a consequence, we can only use it in places where we would otherwise write values separated by commas.

// Next, let's learn about two important use cases of the spread operator, which is to create shallow copies of arrays, and to merge two arrays together.

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // So here we just created a shallow copy of this array.
console.log(mainMenuCopy);

// Join two or multiple array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// NOTE: All right, so I told you that the spread operator works on arrays, but that's not entirely true, because actually, the spread operator works on all so-called iterables.

// Now what is an iterable?
// Well, there are different iterables in JavaScript. just know that iterables are things like all arrays, strings, maps, or sets, but not objects. So basically, most of the built-in data structures in JavaScript are now iterables, but except objects.

// Iterables: Arrays, strings, maps, sets, NOT objects

// since strings are also iterables, that means that we can use the spread operator on a string, as well.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); //  ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...letters); // J o n a s   S.
console.log(...str); // J o n a s
console.log('j', 'o'); // j o
//console.log(`${...str} schmedtmann`); // here spread operator not work

// Real World Example
const ingredients = [
  // prompt('Let's make pasta Ingredient 1?'),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// using spread operator in objects

// since ES 2018, the spread operator actually also works on objects, even though objects are not iterables.

// Create new object using spread operator
const newRestaurent = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurent);

// Copy object to a new object
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

// Change the property name of new object
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
