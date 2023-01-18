// Objects
// Objects are collections of key value pairs

// So, if we have properties that are highly related, we want to encapsulate them inside of an object

// As an  example, lets say we are building an application for drawing different kinds of shapes, like circles, rectangles and so on.

// So, we could declare multiple variables, around circles for example radius we set that to 1. let  x = 1, y = 1, we are defining multiple variables, but all these variables are highly related, they represents the circle. A better approach is to put these variables inside of an object.

// Now we can send that object anywhere in our programs, we can pass that to any functions, and all these variables would be avilable in that object.

// The value we have in an object can be any type in Javascript, It can be a number, a string,  a boolean, null, undefined, it can even be another object, or an array, or a function.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

// Factory or Constructor functions

// Factory Functions is just like a factory producing products.
// These factory functions produce objects

// function createCircle() {
//   const circle = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };
//   return circle;
// }

function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(10);
//console.log(circle1);
circle1.draw();
//circle.draw(); // Method

// Constructor Function (Another pattern for creating objects)
// The naming convention we use for construction functions is differnt. that is pascel notation

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const myCircle = new Circle(20);
console.log(myCircle);
myCircle.draw();

// Dynamic nature of objects
// One thing we need to understand about objects in JavaScript is that they are dynamic which means once we create them we can always add new properties or methods, or remove existing ones.

const rectangle = {
  radius: 1,
};
console.log(rectangle);

rectangle.color = "Yellow";
console.log(rectangle);

rectangle.draw = function () {};
console.log(rectangle);

delete rectangle.color;
console.log(rectangle);

delete rectangle.draw;
console.log(rectangle);
