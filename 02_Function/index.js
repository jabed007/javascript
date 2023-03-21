// Classes blueprint to create object

class Vehicle {
  myVar = "Yes";
  constructor(param1, param2) {
    this.color = param1;
    this.passenger = param2;
  }
  saySomething() {
    console.log(this.color);
  }
}
/*
let obj1 = new Vehicle("Red", 4);
let obj2 = new Vehicle("Green", 2);

console.log(obj1);
console.log(obj2);

obj1.saySomething();
obj2.saySomething();
*/

// Inheritense
// Derived Class
class Car extends Vehicle {
  constructor(numWheel, pass, color) {
    super(color, pass);
    this.wheel = numWheel;
  }
}

let obj1 = new Car(4, 10, "Yellow");
console.log(obj1);