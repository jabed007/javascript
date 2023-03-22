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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    ); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30
  },
};

//////////////////////////////////////////////
//////// Destructuring Objects //////////////
////////////////////////////////////////////

// let's now talk about object destructuring. And so to do that, we use the curly braces to destructure objects.
// So to destructure objects we use the curly braces. Because this is also how we create objects, right?
// Then all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object.
// So the obvious choice here of object to destructure, is restaurant.
// So let's take the name, categories and opening hours of restaurent object.

// So again let's start with const in order to actually define some variable names.
// we need to write the exact property names here to now extract variables from this object.

// Now, since in an object, the order of elements does not matter, we don't need to manually skip elements like we did in an array. So we can simply write name. So that's the restaurant name here.

// And then also remember that in objects, the order of the elements does not matter.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano Object fri: {open: 11, close: 23}, sat: {open: 0, close: 24}, thu: {open: 12, close: 22}(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// Destructuring object is very helpful when we deal with the result of an API call, which basically means to get data from another web application, like waether data or data about movies or something like that and this data usually comes in the form of objects basically. and destructuring is really a lifesaver.

// What if we wanted the variable names to be different from the property names?
// Well, we can do it like this.
// Now, of course we still need to reference the property names like we did before, otherwise JavaScript has no way of knowing what we actually want.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// Note: And so you see that these three are actually the exact same name, but we were able to give them new variable names. Which again that's gonna be immensely helpful when dealing with third-party data.
// And another useful feature for when we are dealing with third-party data like that. So like an object that we get from somewhere else, for example, an API call, as I was just explaining.
// It can be really useful to have default values for the case that we're trying to read a property that does not exist on the object.

// Default Values
// So usually then we get an undefined. For example if we were trying to say restaurant.menu, this would be undefined because there is no property called menu.
// We have starterMenu and mainMenu, but not just menu.
// And so we can set default values just like we can actually in arrays.
// So let's say that we are trying to destructuring the menu. And so we use equal to set a default value, all right?
// And then we can do the same with the starter menu,
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// Note: keep in mind that this is especially helpful when we do not have or data hard-coded like we have it here. So this is just hard-coded data in our application. But in the real world, we usually get the data from somewhere else. And then we might not always know how exactly the data looks like. And so then it's useful to set defaults like this.

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // 23 7

// Nested Objects
/*
const { fri } = openingHours;
console.log(fri);
*/

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// And now to finish,
// let me actually show you a really cool practical application of this destructuring.
// And for that, we're gonna go back to our object here. So to our example of the section.
// So many times in JavaScript, we have functions with a lot of parameters. But then it can be hard to know the order of parameters for someone that is using this function.
// And so instead of defining the parameters manually, we can just pass an object into the function as an argument, and the function will then immediately destructure that object.
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({ address: 'abc', starterIndex: 1 }); // Order received! Bruschetta and Pizza will be delivered to abc at 20:00
