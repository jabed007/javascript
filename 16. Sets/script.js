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

// In the past, JavaScript has always had very little built-in data structures. So basically, we only had objects and arrays. But in ESX, two more data structures were finally introduced. And that are. sets and maps.

// And a set is basically just a collection of unique values. So that means that a set can never have any duplicates. And that property makes them useful in certain situations.

// So let's create a new set here. Let's call it ordersSet. to create a new set, we write new set and then here, we need to pass in an iterable. And the most common iterable here is an array. So let's create an array with a couple of strings now.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

// Now, also we can see that a set kind of looks similar to an array, right. So there are no key value pairs, it's just a bunch of values grouped together, in this case into a set.

// And just like arrays, sets are also iterables. Now, of course a set is still very different from an array.

// So first, because its elements are unique. And second, because the order of elements in the set is irrelevant.

console.log(new Set('Jonas'));
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

// But now you might ask, how do we actually retrieve values out of a set? Can we maybe use an index, like in a arrays? So doing something like, maybe like this here? And the answer, as we will see is no. So this doesn't work, it gives us undefined, no matter what number we put here. All right. And that is because in sets there are actually no indexes. And in fact, there is no way of getting values out of a set.

// So there's really no need for getting data out of a set. That's because if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set.

// All we need to know is whether a certain value is in the set or not. And that's why we have the has method.

// If your goal is to actually store values in order and then retrieve it, then the best use case, is to just use an array. You wouldn't use a set for that.

// And so again, there's no need for getting values out of a set, because if you need it, then you will just use an array.
for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Jonasschmedtmann').size);
