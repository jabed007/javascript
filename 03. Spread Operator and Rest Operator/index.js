// Spread Operator
/*
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);
*/

// Spread operato split the array
// Spread Operator helps to merge multiple array
// Example One of Spread Operator
let num1 = [1, 2, 3, 5];
let num2 = [4, 6, 3, 2];
//let num3 = [num1, num2];
let num3 = [...num1, ...num2, 7, 8, 9];
console.log(num3);

// Example 2 of Spread Operator
// Merge 2 Object
let person1 = {
  name: "X",
  age: 45
};

//let person2 = {person1, nationality: "Bangladeshi"};
let person2 = {...person1, nationality: "Bangladeshi"};
console.log(person2);


// Rest Operator
// Rest Operator is the oposite of Spread Operator
/*
let saySomething = numArr => console.log(numArr);
saySomething(1, 3, 5, 8);
*/

let saySomething = (...numArr) => console.log(numArr);
saySomething(1, 3, 5, 7);