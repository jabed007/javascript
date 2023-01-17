// Hour
// If hhour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evenning!

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// Switch
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "modertaot":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// For Loop
// Sometimes you repeat an action a number of times.

// For in loop
// we have two more kinds of loops in javascript and we use them to iterate over the properties of an object or elements in an array

const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// for-of
for (let color of colors) {
  console.log(color);
}

// Exercise - 1

function maximum(a, b) {
  if (a > b) return a;
  return b;
}

function max(a, b) {
  return a > b ? a : b;
}

let num = max(2, 1);
console.log(num);

// Exercise - 02
// function isLandscape(width, height) {
//   return (width > height) ? true : false;
// }

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(800, 600));
console.log(isLandscape(600, 800));

// Exercise 03 -> fizzbuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(number) {
  if (!isNaN(number)) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number;
    }
  } else {
    return "Not a number";
  }
}

// Speed Limit = 70
// 5 km -> 1 point
/*
checkSpeed(140);

function checkSpeed(speed) {
  if (speed <= 70) {
    console.log("ok");
    return;
  }
  if (speed > 70) {
    let point = Math.floor((speed - 70) / 5);
    console.log(point);
    if (point == 0) {
      console.log("ok");
      return;
    }
    if (point > 12) {
      console.log("License Suspended");
    } else {
      console.log("Point: " + point);
    }
  }
}
*/

checkSpeed(77);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points: ", points);
}

// Exercise-04

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");
    const message = i % 2 === 0 ? "Even" : "ODD";
    console.log(i, message);
  }
}

// Exercise-05 (Count Truthy)
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, null, undefined, ""];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let element of array) {
    if (element) {
      count++;
    }
  }
  return count;
}

// Exercise-06 (String Properties)
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

// Exercise - 07 (Sum of Multiples 3 and 5)

console.log(sum(10));

function sum(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Exercise - 08 (Grade)

const marks = [88, 89, 98];

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let avg = 0;
//   let total = 0;
//   for (let mark of marks) {
//     total += mark;
//   }
//   avg = total / marks.length;
//   if (avg < 60) return "F";
//   else if (avg >= 60 && avg <= 69) return "D";
//   else if (avg >= 70 && avg < 79) return "C";
//   else if (avg >= 80 && avg < 89) return "B";
//   else if (avg >= 90 && avg <= 100) return "A";
// }

function calculateGrade(marks) {
  let avg = calculateAvarage(marks);

  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  if (avg < 100) return "A";
}

function calculateAvarage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

// Exercise Stars

showStars(5);

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// Exercise -> Prime Numbers

// Prime (Whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
//  Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);

function showPrimes(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(number) {
  if (number === 2) return 1;
  if (number > 2) {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return 1;
  }
}
