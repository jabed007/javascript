// Operators: In JavaScript we have different kind of operators. we use this operators along with our variables and constants to create expressions. And with these expressions we can implement logic and algorithm.

// So here are the differnt kinds of operators in Javascript.

// We have: 1. Arithmetic Operators 2. Assignment operators 3. Comparison operators 4. Logical operators and 5. Bitwise operators

// **********Arithmetic Operator***********
// The first category of operators we're going to look at is arithmetic operators.
// We use this for performing calculations
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // remainder of division
console.log(x ** y); // exponentiation

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);

// *****************Assignment Operators***********
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

// **************Comaprision Operators***********
// Relational
x = 1;
console.log(x > 0); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // true

// Equality
console.log(x === 1); // true
console.log(x !== 1); // false

// **************Equality Operators***********

// Strict Equality Operator (Type + Value)
// This strict equality operator ensures that both these values we have on the sides of this operator have the same type and same value
console.log(1 === 1); // true
console.log("1" === 1); // false
// So, the strict equality operator ensures that both operand are of the same type and of the same value

// Loose Equality Operator (Value)
console.log(1 == 1); // true
console.log("1" == 1); // true (In this case, this operator looks at the value on the left side. Here we have a string, so it will automatically convert what we have on the right side, to a string so it look like ('1' == '1') this, and now because these values are exactly the same, we get true on the console)
console.log(true == 1); //true

// Note: The strict equality operator ensures that both values have the same type and the same value.
// The loose equality operator doesn't care about the types matching, if the types don't match, it will convert the type of what we have on the right side to match what we have on the left sie. and then it will only check if the values are equal.

// **************Ternary or Conditional Operators***********

// Lets imagine we want to implement a rule like this.

// If a customer has more than 100 points, they are a gold customer, otherwise, they are a silver customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type); // gold

// **************Logical Operators with Non-Booleans***********

// We use logical operators to make decisions based on multiple conditions

// In Javascript we have three types of logical operators
// 1. logical and (&&)
// 2. logical or (||)
// 3. logical not (!)

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false

// Real world use case of logical operator:
// Lets imagine we want to build an application for approving loans.
// So, we want to see if the applicant has a high income and good credit score, then they will be eligible for loans.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible: ", eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused: ", applicationRefused);

// In the last lecture we learned about logical operators, in all the examples we saw in the last lecture, we used these logical operators with boolean values. But in Javascript, unlike in many programming languages, we can use these logical operators with non boolean values.

// false || true = true
// false || 'Mosh' = "Mosh"
// false || 1 = 1
// So when our javascript engine tries to evaluate this expression, it looks at each operand, if that operand is not a boolean true or false, it will try to interpret it as truthy or falsy.

// so in javascript we have this values which we refer to a sfalsy,, thats not a boolean false., it's falsy

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN
// these are the falsy values in javascript, if we use any of these values in a logical expression they will be treated a s falsy, which is kind of like a boolean false., but it's not exactly the same.

// Anything that is not falsy -> Truthy

// false || 1 || 2 = 1

// Short-circuiting
// Real world example of short-circuiting
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
// Now lets read this in plain english.
// userColor or defaultColor that basically means if we have a value for userColor we're going to use that, if we don't, we're going to use the defaultColor.
console.log(currentColor);

userColor = undefined;
defaultColor = "yellow";
currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise Operator
