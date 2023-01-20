// Objects
// Objects are collections of key value pairs

// So, if we have properties that are highly related, we want to encapsulate them inside of an object

// As an  example, lets say we are building an application for drawing different kinds of shapes, like circles, rectangles and so on.

// So, we could declare multiple variables, around circles for example radius we set that to 1. let  x = 1, y = 1, we are defining multiple variables, but all these variables are highly related, they represents the circle. A better approach is to put these variables inside of an object.

// Now we can send that object anywhere in our programs, we can pass that to any functions, and all these variables would be avilable in that object.

// The value we have in an object can be any type in Javascript, It can be a number, a string,  a boolean, null, undefined, it can even be another object, or an array, or a function.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

// Factory or Constructor functions

// Factory Functions is just like a factory producing products.
// These factory functions produce objects

// function createCircle() {
//   const circle = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };
//   return circle;
// }

function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(10);
//console.log(circle1);
circle1.draw();
//circle.draw(); // Method

// Constructor Function (Another pattern for creating objects)
// The naming convention we use for construction functions is differnt. that is pascel notation

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const myCircle = new Circle(20);
console.log(myCircle);
myCircle.draw();

// Dynamic nature of objects
// One thing we need to understand about objects in JavaScript is that they are dynamic which means once we create them we can always add new properties or methods, or remove existing ones.

const rectangle = {
  radius: 1,
};
console.log(rectangle);

rectangle.color = "Yellow";
console.log(rectangle);

rectangle.draw = function () {};
console.log(rectangle);

delete rectangle.color;
console.log(rectangle);

delete rectangle.draw;
console.log(rectangle);

// Constructor Property
// Every object in JavaScript has a property called constructor
// And that references the function that was used to construct or create that object.

// Every object in JavaScript has a constructor property, and that refernces the function taht was create taht object.

// When we create an object using object literal syntax, intermnally the Javascript engine uses this constructor function.

// Example

//let x = {}; // -> When use this syntax, object lliteral, Javascript will translate that to something like this
// let x = new Object();

// In Javascript we have a few built in constructor, for example, we have
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3

// Every object has a constructor property and taht references a function that was used to create that object

// Finctions are objects
// Functions are Objects
// One of the confusing concepts in JavaScript is here functions are objects.

function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle1(1);
another.draw();

console.log(Circle1.name);
console.log(Circle1.length);

const Circle2 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`
); // when we declare a functuion internally it's represent like this
const c = new Circle2(2);
console.log(c);

// Value vs. References Type
// In Javascript we have two categories of types.
// On one side we have value types, also called primitives
// On the other side we have Reference types

// In Value type category we have->
// 1. Number
// 2. String
// 3. Boolean
// 4. Symbol
// 5. undefined
// 6. null
// These are primitive or value types

// On the other sides we have
// 1. Object
// 2. Function (also an object)
// 3. Array (also an object)

// So, in a nutshell in JavaScript we have primitives and objects.
/*
let x = 10; // x = 10
let y = x; // y = 10
x = 20; // x = 20, y = 10
*/

let x = { value: 10 }; // x = 10
console.log(x);
let y = x; // y = 10
console.log(y);
x.value = 20; // x = 20, y = 10
console.log(x);
console.log(y);

// Primitives are copied by their value
// Objects are copied by their reference
/*
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);
*/

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);

console.log(obj);

// Enumerating Properties of an Object
const circlee = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circlee) {
  console.log(key, circlee[key]);
}
/*
for (let key of circlee) {
  console.log(key); // error
}
*/

// The for of loop can only be used with iterables such as arrays and maps.
// Object is not iterable, so we cannot iterate it using for of loop
// However to iterate an object we have a method (Object.keys())
// with this we can get all the keys in our objects and this will return an array
// And since arrays are iterable we can use the for of loop to itearte them.

for (let key of Object.keys(circlee)) {
  console.log(key);
}

// Object is a built in constructor function
// function Object() {}
// const x = {value: 1};
// const x = new Object();
// all function in javascript are object
// So, they have properties and methods we can access using the dot notation

for (let entry of Object.entries(circlee)) {
  console.log(entry);
}

if ("radius" in circlee) {
  console.log("yes");
}

if ("color" in circlee) {
  console.log("yes");
} else {
  console.log("no");
}

// Cloning an Object
// In the last lecture we learned how to enumerate the properties of an object. Now using this technique we can get all the properties in an object and copy them into another objetc.

const book = {
  page: 120,
  read() {
    console.log("read");
  },
};

const javaBook = {};

for (let key in book) {
  javaBook[key] = book[key];
}

console.log(javaBook);

// The above approach for coipying or cloning an object is  a little bit old. In modern JavaScript we have better ways to achieve the same thing.
// One way is to use the object.assign method

const javacsript = Object.assign({ writer: "mark" }, book);
console.log(javacsript);

// Yet another simpler and elegant way to clone an object is
// we can use spread operator
const python = { ...book };
console.log(python);

// Garbage Collection
// In low level languages like C or C++, when creating an object, we need to allocate memory to it.
// And when we are done we have to deallocate memory. But in Javascript, we don't have this concept.
// We cane easily create the new object, at the time initialized this object, the memory is automatically allocated to this object, next we can use that, and when we are done using, we don;t need to dealloacted the memory.
// So, our javascript engine has what we call a garbage collector
// The job of this garbage collector is to find the variables or constants that are no longer used and then deallocate the memory that was allocated to them earlier.
// Memory allocation and deallocation in javascript automatically happens behind the scene and we have no control over that.

// Built in objects in Javascript (Math Object)
// Math Object
Math.random();
Math.round(1.9);
Math.max(1, 2, 3, 4, 5);
Math.min(1, 2, 3, 4, 5);

// String Object
// String primitive
const message = "     This is my first message    "; // string is a primitive type. Primitive types don't have properties and methods. Only objects do.

// So why is it that we see these properties and methods in this string
// The reason for this is because in Javascript we have two kinds of strings

// String object
const anotherMessage = new String("Hi");
console.log(typeof message);
console.log(typeof anotherMessage);

// The length of a string
console.log(message.length);

console.log(message[0]);
console.log(message[1]);

console.log(message.includes("my"));
console.log(message.includes("not"));

console.log(message.startsWith("This"));
console.log(message.startsWith("this"));

console.log(message.endsWith("e"));

console.log(message.indexOf("my"));
console.log(message.replace("first", "second"));
console.log(message);

console.log(message.trim());
console.log(message);
console.log(message.trimLeft());
console.log(message);
console.log(message.trimRight());
console.log(message);

// Template Literals
const email = "This is my\n" + "'first' email";
console.log(email);
// Different kinds of literal in Javascript are
// Object literals = {}
// Boolean Literals = true, false
// String Literals = '', ""
// Now starting from es6 we have Template Literals = ``

const name = "John";
const anotherEmail = `Hi ${name} ${2 + 3}

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(anotherEmail);
// JavaScript also has four built-in objects: Array, Date, Math, and String.
// Date
const now = new Date();
console.log(now);

const date1 = new Date("May 11 2018 09:00");
console.log(date1);

const date2 = new Date(2023, 0, 19, 32);
console.log(date2);

console.log(now.getFullYear());

// Exercise -> 1 (Address object with three properties)
// street
// city
// zipCode
// showAddress(address) (function)
const address = {
  street: "xyz",
  city: "London",
  zipcode: "abcd",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

// Exercise-02 (Factory and constructor function)

function createAddress() {
  return {
    street: "a",
    city: "b",
    zipcode: "c",
  };
}

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

// const address1 = createAddress();
// console.log(address1);

const address1 = new Address("a", "b", "c");

const address2 = new Address("a", "b", "c");
// console.log(address2);
let address3 = address1;

// Exercise - 03 (Object Equality)
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function areEqual(addres1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

// Exercise 4 - Blog Post Object
// title
// body
// author
// views
// comments (author, body)
// isLive (true/false)
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(post);
