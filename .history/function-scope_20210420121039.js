// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.
function myNumber(numberOne, numberTwo) {
  if (typeof numberOne === "number" || typeof numberTwo === "number") {
    console.log(`Yes, ${numberOne} or ${numberTwo} is a real number`);
  }
}

myNumber(3, 4);
myNumber("three", "four");
myNumber("3", "4");

// After that, the function should print _y_
//exponential values starting from _x_.
function myExponential(x, y) {
  console.log(Math.pow(x, y));
}

myExponential(2, 3);
myExponential(7, 3);
myExponential(4, 0.5);
myExponential(2, -1.05);

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
function myNextExponential(a, b) {
  for (var i = 0; i < 4; i++) {
    console.log(a * b);
    a = a * 3;
  }
}

myNextExponential(3, 3);

// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

function myNextExponential(c, d) {
  for (var j = 0; j < 7; j++) {
    console.log(c * d);
    c = c * 2;
  }
}

myNextExponential(2, 2);

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function
//and store your favorite fruit as a value.
// Reassign the variable within the function and print "My favorite fruit is: _x_".

let myFruit = "Lemon";
function printFavoriteFruit(fruit) {
  fruit = myFruit;
  console.log("My favourite fruit is: " + fruit);
}

printFavoriteFruit("Orange");

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters.
//The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function.
//Is this possible? Why/Why not? Comment your answer in the `index.js` file.
function exponent(e, f) {
  let result = e;
  console.log(result);
  for (var i = 0; i < f; i++) {
    //    result = e * e;
    console.log(result);
    //    e = e * result;
  }
}

exponent(2, 4);

// console.log(result);
