// Arrays
// Adding Elements
// Finding Elements
// Removing Elements
// Splitting Arrays
// Combinning Arrays

// *******************************
// Adding Elements to an array
// array.push() // added elements at the end
// array.unshift() // added elements in the beginning
// array.splice() // added elements in the middle
// *******************************
const numbers = [1, 2, 3, 4];
// numbers = []; // error
// Here we declared an array as constant, that means we can not reassign numbers to something else, if we do this, we get this error assignment to constant variable.
// However, its perfectly fine to modify the content this array.
// We can add new elements or remove existing elements.
// So, constant doesn't stop us from modifying the content of an arrary.

// We know that arrays are objects, so using the dot notation, we can look at all the properties and methods defined in arrays

// Add new elements in an array
// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

// Finding Elements (Primitives)
// Finding elements depends on if you're storing primitive or reference types in an array
console.log(numbers.indexOf("x"));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf("1"));
console.log(numbers.lastIndexOf(1));

// If a given element exist we can check this by
console.log(numbers.indexOf(1) !== -1); // this is a little bit ugly, we have a new method in javascript for achieving the same thing
console.log(numbers.includes(1));

// ************************************
// Finding Elements (Reference Types)
// Finding primitives is different from
// finding reference types
// ************************************
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" })); // output: false
// we dont use .includes() method to find a value of an object
// instead we use object.find() method to finding elements of an object

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

const courseIndex = courses.findIndex(function (course) {
  return course.name === "b";
});

console.log(courseIndex);

// *******************************
// Arrow functions
// *******************************

// const course = courses.find(course => course.name === 'a');
// const courseIndex = courses.findIndex(course => course.name === 'b');

// *******************************
// Removing elements from an array
// array.pop() // remove element in the last
// array.shift() // remove element from the begining
// array.splice(index, count/how-many);
// *******************************

const rolls = [1, 2, 3, 4];

// End
const last = rolls.pop();
console.log(last);
console.log(rolls);

// Beginning
const first = rolls.shift();
console.log(first);
console.log(rolls);

// Middle
const middle = rolls.splice(0, 2);
console.log(middle);
console.log(rolls);

// *******************************
// Emptying an Array
// *******************************
let classes = [1, 2, 3, 4, 5, 6];
console.log(classes);

let another = classes;
console.log(another);

// How to remove an element from an array
// But what about emptying an array
// How can we remove all the elements in this array
// There are a few different solutions

// Solution 1
// We can simply reassign this to a new array
//classes = []; // Now our array is empty
//console.log(classes);

// However, note that this old array is still in the memory, so if there are no another references to this object, eventually it will be removed by the garbage collector.
// So, this means if we have, lets say another variable called another, and this also pointing to the same object, this original array will not be garbage collected.

// When we reassign the numbers variabl, now numbers is pointing to a new object in memory, but another is still pointing to the old object.

// so this solution works if we dont have any other references to the original array.
// If we have multiple references to the original array then we need to use one of the other solutions.

// Solution 2
// classes.length = 0;
// console.log(classes);
// console.log(another);

// Solution 3
// classes.splice(0, numbers.length);
// console.log(classes);

// solution 4
// is used to pop method
while (classes.length > 0) classes.pop();
console.log(classes);

// *******************************
// Combining and Slicing Array
// *******************************

// Combining Array
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8, 9];

const combined = firstArray.concat(secondArray);
console.log(combined);

// Slicing Array
const slice = combined.slice(2, 6);
// combined.slice(2);
// combined.slice();
console.log(slice);
// One thing we need to understand about both this method, is that if we are dealing with primitive values this primitive will be copied in the target array
// but if we have objects in our array the objects themsleves are not copied, thre references are copied.
// And that means the elements in both the input and output arrays will point to the same object

// Example
const objectArray = [{ id: 1 }, 1, 2, 3];
const output = objectArray.concat(secondArray);
console.log(output);

// Working with object reference
objectArray[0].id = 10;

console.log(output);

// *******************************
// The spread Operator
// *******************************

const one = [1, 2, 3, 4, 5];
const two = [6, 7, 8, 9, 10];
const three = [...one, "a", ...two, "b"];
console.log(three);

// In the last lecture we learned that if we call the slice method without any arguments, that will return a copy of the original array
// const copy = combined.slice();
const copy = [...combined];

// *******************************
// Iterating an Array
// *******************************

// Earlier in the section about control flow, we learned about various loops in Javascript
// So, in that section we learned that if we want to learned to iterate an array
// To iterate an array we use the for of loop
const digits = [1, 2, 3];

for (let digit of digits) console.log(digit);

digits.forEach((digit, index) => console.log(index, digit));

// *******************************
// Joining Arrays
// *******************************
const joinedExample = [1, 2, 3, 4, 5];
const joined = joinedExample.join(",");
console.log(joined);

// Split String
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combinedParts = parts.join("-");
console.log(combinedParts);

// *******************************
// Sorting Arrays
// *******************************
const sortingArrays = [2, 3, 1];
sortingArrays.sort();
console.log(sortingArrays);

// Another method that is often companion to the sort method is the reverse method
// And with this we can reverse the order or elements in an array
sortingArrays.reverse();
console.log(sortingArrays);

// This sort method is pretty useful, It's very easy to use when we have numbers and strings in an array

// But when we have objects like course objects, it doesn't work by default, we have to do some extra work
const courseArray = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "ReactJs" },
];

// We want to sort this object array by the name of courses
// So, Javascript shoould come before "Node.js"

courseArray.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  console.log(nameA, nameB);

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courseArray);

// *******************************
// Testing the elements of an array
// *******************************

// We have two new methods in modern JavaScript called every() and sum().

// Lets Imagine we want to check and see if  all numbers in this array are positive.

// every() checks to see if every element in a given array matces the given criteria(value >= 0)
// And some() checks to see if we have at least one element that matches the given criteria(value >= 0)

const testNumbers = [1, 2, , -1, 3, 4, 5];

// array.every();
// if all positive then return true
const allPositive = testNumbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

// array.some()
// at least one positive -> return true
const atLeastOnePositive = testNumbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);

// *******************************
// Filtering an Array
// *******************************

// How to filter an array based on a search criteria

// So, back to our numbers array, lets say we want to return only the positive numbers
// So, we can use the filter method

const filterExample = [1, -1, 2, 3];

const filtered = filterExample.filter(function (value) {
  return value >= 0;
});

console.log(filtered);

// When we called the filter method on an array, this method will loop through this array and execute the call back function for each number / each element.
// Now, if the element matches the criteria(value >= 0) it will add this element to an array, and finally we can get the new array

// Here we're dealing with an array of numbers, in a real world application, we will be using an array of objects.

// For, example here on the yelp website, we can click this button to find only the restaurants, that are open now. so, this is one kind of filtering, so if we want to implement something like this, instead of an array of numbers you would have an array of restaurents and each restaurants has opening hours. so you could filter restaurants that are currently open and return them.

// *******************************
// Mapping an Array
// *******************************

// Another very useful and powerful method we have in Javascript is the map method
// With this method we can map each item in the array to something else.
