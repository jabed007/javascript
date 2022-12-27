// Values and Variables
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

// Assignment of Values and Variables
let country = "Bangladesh";
let continent = "Asia";
let population = 166.3;

console.log(country);
console.log(continent);
console.log(population);

// Data types

true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Assignment of Data Types
let isIsland = "Bangladesh";
let language;

console.log("Output of Assignment 2");
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let const and var
console.log("let const and var");
let age = 31;
age = 30;

const birthYear = 1991;
//birthYear = 1990; // error
//const job; // error

var job = "Programmer";
job = "Teacher";
console.log(job);

lastName = "Schmedtmann";
console.log(lastName);

// Basic Operator
// Math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstNameJonas = "Jonas";
const lastNameJonas = "Schmedtmann";

console.log(firstNameJonas + " " + lastNameJonas);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
console.log(".....Operator Precedsence....");
const yearNow = 2037;
const jonasAge = yearNow - 1991;
const sarhAge = yearNow - 2018;

console.log(jonasAge, sarhAge);

console.log(now - 1991 > now - 2018);

let xx, y;
xx = y = 25 - 10 - 5; // xx = y = 10, xx = 10, y = 10
console.log(xx, y);

const average = (jonasAge + sarhAge) / 2;
console.log(jonasAge, sarhAge, average);
console.log(average);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
