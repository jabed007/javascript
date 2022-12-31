"use strict";

///////////////////////////////////////
// Activating Strict Mode
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// const interface = audio;
// const private = 534;

///////////////////////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
const num = Number("23");
console.log(num);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

///////////////////////////////////////
// Arrow functions
const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1980);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2037 - birthYear;
  const retirementYear = 65 - age;
  // return retirementYear;
  return `${firstName} retires in ${retirementYear}`;
};

console.log(yearsUntilRetirement("Jonas", 1991));
console.log(yearsUntilRetirement("Bob", 1980));

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPeices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPeices(apples);
  const orangePieces = cutFruitPeices(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} peices of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
