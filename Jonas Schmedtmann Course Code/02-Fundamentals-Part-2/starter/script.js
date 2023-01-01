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

/*
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
*/

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

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

const yearsUntilRetirement = function (firstName, birthYear) {
  const age = calcAge(birthYear);
  const retirementYear = 65 - age;

  if (retirementYear > 0) {
    console.log(`${firstName} retires in ${retirementYear} years`);
    return retirementYear;
  } else {
    console.log(`${firstName} has already retired 💐`);
    return -1;
  }
};

console.log(yearsUntilRetirement("Jonas", 1991));
console.log(yearsUntilRetirement("Mike", 1950));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice'];

const personName = "Jonas";
const jonasArray = [personName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonasArray);
console.log(jonasArray.length);

// Exercise
const calcAges = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const myAge1 = calcAges(years[0]);
const myAge2 = calcAges(years[1]);
const myAge3 = calcAges(years[years.length - 1]);
console.log(myAge1, myAge2, myAge3);

const ages = [
  calcAges(years[0]),
  calcAges(years[1]),
  calcAges(years[years.length - 1]),
];

console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const myFriends = ["Michael", "Steve", "Peter"];

// Add elements
const newLength = myFriends.push("Jay");
console.log(myFriends);
console.log(newLength);

myFriends.unshift("John");
console.log(myFriends);

// Remove elements
myFriends.pop(); // Last
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

myFriends.shift(); // First
console.log(myFriends);

console.log(myFriends.indexOf("Steve"));
console.log(myFriends.indexOf("Bob"));

myFriends.push(23);
console.log(myFriends.includes("Steven"));
console.log(myFriends.includes("Bob"));
console.log(myFriends.includes("23"));
console.log(myFriends.includes(23));

if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
