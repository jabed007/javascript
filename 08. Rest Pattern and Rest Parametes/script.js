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
////////////////// REST OPERATOR //////////////////////////////
//////////////////////////////////////////////////////////////

// The rest pattern looks exactly like the spread operator. So it has the same syntax with the three dots but it actually does the opposite of the spread operator.
// we used the spread operator to build new arrays or to pass multiple values into a function. So those are the two use cases of the spread operator and in both cases, we use the spread operator to expand an array into individual elements.

// Now, the rest pattern uses the exact same syntax however, to collect multiple elements and condense them into an array.
// so that's really the opposite of spread

// The spread operator is to unpack an array while rest is to pack elements into an array

const arr = [1, 2, ...[3, 4]]; // spread operator
console.log(arr); // output: [1, 2, 3, 4]
// So here we are still using the spread syntax and we know that this is the spread syntax because we are using it on the right hand side of the assignment operator, so of the equal sign.
// spread, because on the right side of the assignment operator

// however, we can also use it on the left hand side of the assignment operator together with destructuring.
// So now we're mixing kind of everything together here

// REST because on left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5]; // So let's say that we are destructuring this array
// so here it is the rest syntax because it's on the left hand side of the assignment operator,

console.log(a, b, others); // output: 1 2 (3) [3, 4, 5]
// output: 1 2 (3) [3, 4, 5]
// So what is happening here?
// the first and the second elements become this first and second variables, but then here comes the rest pattern and so it's called rest because it will take the rest of the elements.
// So the remaining elements of the array and then put them into a new array and in this case, we call this array others.
// the rest pattern basically collects the elements that are unused in the destructuring assignment.

// So let's see another example here
// and this will show you that we can actually use the three dots on both sides of the assignment operator.
// So let's say that we have this array which will be the entire menu and so we already know how to build that using the spread operator. So we go to restaurant dot main menu

// so we take all the elements out of that array and put it into a new array and then into this new array we also put the starter menu, okay? So this is going to be an array, a big array with all the entire menu, but now we can actually also use the rest pattern here and so again, we do that here on the left hand side while we are doing destructuring.

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods); // output: Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// note here that the rest syntax collects all the array after the last variable. So in this case here risotto so it does not include any skipped elements so it's really just the rest of the elements
// it does not include any skipped elements and so for that reason, the rest pattern always must be the lest in the destructuring assignment because otherwise how will JavaScript know until when it should collect the rest of the array, right?
// So for example, we could not do this so the error message is actually very explicit so the rest element must be the  last element. and also for the same reason there can only ever be one rest in any destructuring assignment.

// and now let's do the same in objects because it also works indeed in objects.
// So the difference then of course, is that the remaining elements will be collected into a new object and not into a new array.

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat); // {open: 0, close: 24}
console.log(weekdays); // {open: 0, close: 24}
