// ! ==== Functions =====

// ! Named Function:
// Any function that is declared with identifier is called named function.

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10, 20));

// ! Anonymous Function:
// Any function that is declared without identifier is called anonymous function.
// As there is no identifier, we have to store the function in a variable and we have to invoke w.r.to variable name.

// let add = function (a, b) {
//     return a + b;
// }
// console.log(add(10, 20));

// console.log(typeof add);

// ! ========== Internal working ==================
// ? Case 1:
/*
console.log("start");
var a = 10;
console.log(a);

var b = 20;
console.log(b);

function sum() {
    var m = 30;
    var n = 40;
    return m + n;
}

var c = 30;
console.log(c);

console.log(sum());

var d = 40;
console.log(d);

console.log("end");
*/

// ? Case 2:
/*
console.log("start");
var a = 10;
console.log(a);

var b = 20;
console.log(b);

var add = function sum() {
    var m = 100;
    var n = 200;
    return m + n;
}
var c = 30;
console.log(c);
console.log(add());
var d = 40;
console.log(d);
console.log("end");
*/

// ? Case 3:
/*
console.log("start");
var a = 10;
console.log(a);

var b = 20;
console.log(b);

var add = function sum(m, n) {
  return m + n;
};
var c = 30;
console.log(c);
console.log(add(100,200));
var d = 40;
console.log(d);
console.log("end");
*/

// ! ===== IIFE ======
// (
//     function (a, b) {
//         console.log(a + b);
//     }
// )(10, 20);

// !  ======= Arrow Function =======
// ? Case 1:
// let square = (n) => {
//     return n ** 2;
// }
// console.log(square(10));

// ? Case 2:
// If we have only one parameter then parenthesis is not required.
// let square = n => {
//   return n ** 2;
// };
// console.log(square(10));

// ? Case 3:
// If we have only one statement in a block then block is not required.
// let square = n => n ** 2;
// console.log(square(10));
// console.log(square(2));
// console.log(square(5));
// console.log(square(3));

// ! ================== Higher Order Function ============
// It is a function which accepts another funtion as argument.

// ! ======== Call back ======
// It is a function which sends as argument to another function.
/*
console.log("start");

function Calculator(a, b, operation) {
  return operation(a, b);
}

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
console.log(Calculator(10, 20, sum));

function sub(a, b) {
  return a - b;
}
console.log(sub(10, 20));
console.log(Calculator(10, 20, sub));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 20));
console.log(Calculator(10, 20, multiply));

console.log("end");
*/

// ! ========== Nested Fuction ================
// ? Example 1:
/*
console.log("start");

function outer() {
  var a = 10;
  var b = 20;
  var c = 30;

  function inner() {
    var m = 100;
    var n = 200;
    return a + b + m + n;
  }

  return inner();
}
console.log(outer());

console.log("end");
*/

// ? Example 2:
console.log("start");

function grandparent() {
  var acre_g = 50;

  function parent() {
    var acre_p = 20;

    function kesav() {
      var acre_k = -80;
      return acre_g + acre_p + acre_k;
    }
    return kesav;
  }
  return parent;
}

console.log(grandparent()()()); // ! CURING: It is a process of invoking the nested funtions along with parent funtion.

console.log("end");


