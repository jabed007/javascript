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
