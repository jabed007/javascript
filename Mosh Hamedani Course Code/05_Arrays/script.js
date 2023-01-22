// Arrays
// Adding Elements
// Finding Elements
// Removing Elements
// Splitting Arrays
// Combinning Arrays

// Adding Elements
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

// Finding Elements (Reference Types)
// Finding primitives is different from finding reference types

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

// Arrow functions

// const course = courses.find(course => course.name === 'a');
// const courseIndex = courses.findIndex(course => course.name === 'b');
