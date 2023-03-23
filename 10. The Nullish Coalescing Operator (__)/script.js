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

// So in the last video, we used the OR operator to set a default value in case that the first value was a falsy value.
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10
// And so let's again remember what happens here, which is when we set numGuests to zero, then JavaScript will still take this default value here and assign it to guests because zero is a falsy value now, and so therefore, we go to the second operand.

// However, fortunately for us, there is a very good solution to this, and that's the new operator with the very weird name of nullish coalescing operator.

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

// And so it works almost the same way as the OR operator, really almost the same, but it will fix or error here.

// So let's see that it does, and now indeed, we get zero. So we get the real value that is actually here. And now if we take it off, only then we get 10, which is the default value that we want.

// So why does this work?
// Well, it is because the nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values. And nullish values are null and undefined. That's it. It does not include a zero or the empty string.

// So basically, for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well. But again, this operator does work with the principle of nullish values. And so all the nullish values will short circuit the evaluation here.

// Okay, so only if this was null or undefined, only then the second operand here would be executed and returned.
