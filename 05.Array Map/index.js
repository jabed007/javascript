// Array Mapping
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function(number) {
  return number * number;
});
                          
console.log(squares);

let cubes = numbers.map((item) => {
  return item**3;
});

console.log(cubes);

// Shortcut method
cubes = numbers.map(item => item**3);
console.log(cubes);