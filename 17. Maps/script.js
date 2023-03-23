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

// So, we learned about sets. Now, it's time to learn about the other new JavaScript data structure and that is maps.

// And, let me start by telling you that maps are a lot more useful than sets.

// So what exactly is a map? Well, it's certainly not the same thing that we use in the real life to find our ways around.

// Now, instead in JavaScript, a map is a data structure that we can use to map values to keys.

// So, just like an object data is stored in key value pairs in maps. Now, the big difference between objects and maps is that in maps, the keys can have any type and this can be huge.

// So, in objects, the keys are basically always strings. But in maps, we can have any type of key.

// It could even be objects, or arrays, or other maps.

// And the easiest way to create a map is to actually create an empty map without passing anything in. And then, to fill up the map we can use the set method. And then here, we pass into arguments.

// The first is the key name.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firanze, Italy');
rest.set(2, 'Lisbon, Portugal');

// And, calling the set method like this does not only update the map that it's called on, but it also returns the map.
console.log(rest.set(3, 'Rome, Italy')); // Map(4) {'name' => 'Classico Italiano', 1 => 'Firanze, Italy', 2 => 'Lisbon, Portugal', 3 => 'Rome, Italy'}

// Now, the fact that the set method actually returns the updated map allows us to chain the set method like this.

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// So, again, calling the set method returns the updated map. And so, all of this is now the updated map. And so, we can call set again on that map. And, we can continue this even further.

// Now, in order to read data from a map we use the Get method. And so, that get method is available on all the maps.

// And so, all we need to do is to pass in the name of the key.
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open

// Example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open

// Available methods of maps
console.log(rest.has('categories')); // true
rest.delete(2);
console.log(rest); // Map(8) {'name' => 'Classico Italiano', 1 => 'Firanze, Italy', 3 => 'Rome, Italy', 'categories' => Array(4), 'open' => 11, …}

console.log(rest.size); // 8
//rest.clear();

// we can in fact use arrays or objects as map keys.
const arr = [1, 2];
rest.set(arr, 'Test');
// now, to get the data based on that array
//onsole.log(rest.get([1, 2])); // undefined

console.log(rest.get(arr)); // Test

// Maps Iteration
// So let's continue learning about maps. So in the last video we created an empty map and then edit elements to it by using the set method. Remember, however, there is actually another way of populating a new map without having to use the set method. And I prefer that because the set method is a bit cumbersome when there are a lot of values to set.

const quiz = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); // (3) [Array(2), Array(2), Array(2)]
console.log(hoursMap); // Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

// Iterations of map

// Quiz App
console.log(quiz.get('question'));

for (const [key, value] of quiz) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(quiz.get(quiz.get('correct') === answer));

// Convert map to an array
console.log([...quiz]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(quiz.entries()); // MapIterator {'question' => 'What is the best programming language in the world', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
console.log(quiz.keys()); // MapIterator {'question', 1, 2, 3, 'correct', …}
console.log(quiz.values()); // MapIterator {'What is the best programming language in the world', 'C', 'Java', 'JavaScript', 3, …}
