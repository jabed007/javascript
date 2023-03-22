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
};

/////////////////////////////////////////////
/////////// Destructuring Arrays ///////////
///////////////////////////////////////////

// destructuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables.
// So in other words destructuring is to break a complex data structure down into a smaller data structure like a variable.
// So for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

// So let's just actually start with a very simple array. And now if we wanted to retrieve each one into its own variable without destructuring, we would do it like this.
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 1 2 3

// Destructuring Array
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

const [first1, , second1] = restaurant.categories;
console.log(first1, second1); // // Italian Vegetarian

let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

// Switching Variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, temp);
[main, secondary] = [secondary, main];
console.log(main, secondary); // Pizzeria Italian

// And another trick with destructuring is that we can have a function, return an array and then we can immediately destruct the result into different variables.
// And so this basically allows us to return multiple values from a function.
console.log(restaurant.order(2, 0)); // (2) ['Garlic Bread', 'Pizza']
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 (2) [5, 6]
// but what if we actually wanted all the individual values? Well then we would essentially have to do destructuring inside of destructuring.
const [m, , [n, o]] = nested;
console.log(m, n, o); // 2 5 6

// And now to finish there is just another feature So we can also set default values for the variables when we are extracting them.
// And that's gonna be very useful in the case that we don't know the length of the array, and this can sometimes happen in real world applications,
// So if we have an array that is shorter than we might think, then we might try to unpack the array in positions that don't even exist.

// Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
// this can sometimes be useful. For example, when we get data from an API.
