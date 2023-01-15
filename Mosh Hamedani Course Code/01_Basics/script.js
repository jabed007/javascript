//console.log("Hello World");
// Variables
// let name = "Mosh";
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hypen (-)
// Are case-sensitive

// let firstName = "Mosh";
// let lastName = "Hamedani";

// const variable
const interestRate = 0.3;
//interestRate = 1; // error
console.log(interestRate);

// ----In Javascript we have two categories of types----

// 1. Primitives / Value Types
// 2. Reference Types

// Primitive types/ Value TYpes -->
// 1. String 2. Number 3. Boolean 4. undefined 5. null

// let nameMosh = "Mosh"; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstNameMosh = undefined;
// let lastNameMosh = null;
// let selectedColor = null;

// Dynamic Types
// One thing that separates Javascript from a lot of programming languages, is that javascript is a dynamic language

// What means by dynamic
// We have two types of programming languages
// 1. static languages (Statically typed)
// 2. Dynamic Languages (Dynamically-typed)

// Static Language: In static languages when we declare a variable is set (string name = "John") and it cannot be changed in the future.

// Dynamic Language: In a dynamic language like JavaSCript the type of a variable (let name = "John") can change at run time
// Example:

let name = "Mosh";
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

console.log(typeof name);
name = 20;
console.log(typeof name);

console.log(typeof age);
age = 30.5;
console.log(typeof age);

console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);

// Reference Types:
// 1. Object
// 2. Arrays
// 3. Functuions

// Object: What is an Object
// An object in JavaScript and other programming languages is like an object in real life
// Example: Think of a Person: A person has name, age, address and so on. These are the properties of a person. We have the same concept in JavaScript. So when we are dealing with multiple related variables, we can put these variables inside of an object. For example, here we have two variables name and age.They are highly related, they are part of the representation of a person, so instead of declaring two variables, we can declare the person object.
// And then instead of referencing these two variables we can jsut reference the person object, it makes our code cleaner.

// Object
// {} -> Object literals
const person = {
  name: "Mosh",
  age: 30,
};

console.log(person);
console.log(person.name);

// Dot Notation
console.log(person);

person.name = "John";
console.log(person.name);

console.log(person);

// Bracket Notation
person["name"] = "Mary";
console.log(person["name"]);
console.log(person);

let selection = "age";
console.log(person[selection]);

// Arrays
// Sometimes in our applications, we might be dealing with a list of objects. For example, the list of products in a shopping cart or the list of colors the user has selected. In situation like that we use an array to store that list.

// Example of Array
let selectedColors = ["red", "blue"];
console.log(selectedColors);

// Note: Javascript is a dynamic language. so the type of variables can change in run time. The same principle applies to our arrays.
// So the length of arrays as well as the type of objects we have in an array are dynamic, they can change.
console.log(selectedColors[0]);
selectedColors[2] = "green";
console.log(selectedColors);

// Note: The type of objects we have in this array is dynamic, so unlike other programming languages, where every item or object in the array, should have the same type, in Javascript we can store differnt types in an array. So, we can make the last element a number.
selectedColors[3] = 1;
console.log(selectedColors);

// So the objects in the array as well as the size of the array are dynamic.

// Note: technically an array is an object, so just like the person object we defined in the last lecture, it has a bunch of key value pairs, or properties that we can access using the dot notation.
console.log(typeof selectedColors);
// So an array is an object in JavaScript
console.log(selectedColors.length);
// Note: Array is a data structure, that we use to represent a list of items

// Functions
// Functions are one of the fundamental building blocks in JavaScript. A function is basically a set of statements that performs a task or calculates a value.

// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// Calculating a Value
function square(number) {
  return number * number;
}

greet("John", "Smith");

console.log(square(2));

// Note: A function is a set of statements that either performing a task or calculate and returns a value.
