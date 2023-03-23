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

// Let's learn about an even newer feature of objects and also of arrays which is called optional chaining.

// So, let's say that we wanted to get the opening hours of our restaurant for Monday.

// So let's quickly check that. So restaurant.openingHours, and then since we are checking for Monday, let's try .mon. So which could stand for Monday.
console.log(restaurant.openingHours.mon); // undefined

// Now, actually this property doesn't exist. So you see that this is undefined, right?

// But let's pretend that we do not know whether this restaurant opens on Monday or not. And that could be the case.

// For example if this data came from a real web service. So a web API. And in their service there could be multiple restaurants and not all of them would open on Monday. And so we had no way of knowing if this particular restaurant would open on Monday or not.

// But now let's go even further because we actually want to know exactly the hour on which the restaurant opens on Monday.

// console.log(restaurant.openingHours.mon.open);

// So let's see what we get.
// script.js:70 Uncaught TypeError: Cannot read properties of undefined (reading 'open')
//at script.js:70:41

// And now we do actually get an error because the results of this was undefined. And then undefined.open is really an error. So that's the error that we get here.

// So in order to avoid this error, we would first have to check if this here actually exists.

// So we could do something like this.
// If this property exists, basically then do this. Or we could also use a logical operator as we already learned but this here is a bit more readable, all right?

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// So if we did the same for let's say Friday, then we already know that Friday exists. And so this would then work and it would be 11.
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open); // 11
}

// But let's focus here on Monday, which is the day that doesn't exist.
// So it's not a big deal to having to add this logic here but it does make our code a little bit more unreadable and more messy. However, this is checking just for one property. So just for Monday.

// But now imagine that opening hours here would also be optional. Or in other words that maybe the restaurant object can also not have opening hours. So, in this case, we would have to check for both, right?

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// So we would have to do if restaurant.openingHours exists and if restaurants.openingHours.mon exists while only then unlock the opening hours to the console. And this can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties. And sometimes that happens in the real world.

// And so therefore ES2020 introduced a great solution for this, which is a feature called optional chaining.

// And with optional chaining, if a certain property does not exist, then undefined is returned immediately. And so that will then avoid that kind of error that we saw earlier. And this is how it works.

// So let's recreate it now with optional chaining.
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Check if a method exist before calling it using optional chaining
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

// Optional chaining even works on arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

// Without optional chaining this code look like this
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('users array is empty');
}
