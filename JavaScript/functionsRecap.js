//! Named Function:
// Any function that is declared with identifier name is called named function.

function sayHello() {
  return "Hii Hello How are you!!!";
}
console.log(sayHello());

// ! Anonymous function:
// Any function that is declared without identifier name is called named function.

var hello = function () {
  return "Hii Hello How are you!!!";
};

console.log(hello());

// ! first class function
// The function which is assigned as a value to variable is called first class function.
var hello = function () {
  return "Hii Hello How are you!!!";
};

/*
Here:
function () {
  return "Hii Hello How are you!!!";
};

is a first class function
*/

var hello = function sayHello() {
  return "Hii Hello How are you!!!";
};

/*
Here:
function sayHello() {
  return "Hii Hello How are you!!!";
};

is a first class function
*/

var hello = () => {
  // code
};

/*
Here:
() => {
    // code
}

is a first class function

*/

// ! Diff b/w anonymous and first class:
//              Anonymous                       First class
//    without identifier                    named / anonymous / arrow
//    help of a variable / IFFE          must & should store in a variable [mandatory]

//! Function Expression
// It is an expression of storing a function into a variable.
var a = 10; // simple expression
var status = true; // simple expression
var ar = [10, 20, 30]; // simple expression
var obj = { sname: "Hjkaslfb", age: 20 }; // simple expression

var hello = function () {
  console.log("Logic");
}; // function expression

// ! Arrow Funtion:
// let greet = () => {
//   return "Hello Guys!!!";
// };
// console.log(greet());

// let greet = () => "Hello Guys!!!";
// console.log(greet());

var square = n => {
  return n ** 2;
};
console.log(square(10));

// single parameter
var square = n => {
  return n ** 2;
};
console.log(square(10));

// single block
var square = n => n ** 2;
console.log(square(10));

// ! Higher Order Function
// Any function which accepts another function as its parameter is called Higher order function.

// ! Callback
// Any function which send as argument to another function is called callback function.

function Calculator(callback, a, b) {
  return callback(a, b);
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// normal way: here we assigining numbers as arguments
console.log(sum(10, 20));
console.log(sub(10, 20));
console.log(multiply(10, 20));
// console.log(Calculator("Hello"));

// here we are assgining function as arguments
console.log(Calculator(sum, 10, 20)); // here calcutor is called HOF , sum is called Callback function.
