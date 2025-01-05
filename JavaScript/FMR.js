/*! 
  // ! Filter Map Reduce.
  All three methods are used to iterate through an array.
  All three will not effect the original array.

  // ? filter:
          1. iterate
          2. checking condition

  // ? map:
          1. iterate
          2. updation
          
*/

// ! ========= filter method ========
// var ar = [75, 35, 64, 78, 15, 62, 72, 34, 38, 25, 75];

// ? 1. creating one empty
// ? 2. iterating
// ? 3. based on condition storing in empty array.

// ? Case 1: for
/*
var filterArray = []; // one empty array required to store the fitered data
console.log(filterArray);

for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
  // iterating

  if (ar[i] >= 35) {
    // based on condition we filtering data
    filterArray.push(ar[i]);
  }
}

console.log(filterArray);
*/

// ? Case 2: for of
/*
var filterArray = [];
console.log(filterArray);

for (let i of ar) {
  console.log(i);
  if (i >= 35) {
    filterArray.push(i);
  }
}

console.log(filterArray);
*/

// ? Case 3: filter with named fn
// filter will iterate on array
// It requires a call back fn which contains a condition.
// ~ collectionName.filter(callbackfn);
// callback fn should contain one parameter for iterating.
// filter method will store the elements which statisfies the condition.
/*
console.log(ar);
console.log(ar.filter(checkCondition));

function checkCondition(i) {
  return i >= 35;
}
*/

// ? Case 3.1 : filter with arrow fn
/*
console.log(ar);

// If we have only one parameter then ----> we can remove parenthesis
console.log(
  ar.filter(i => {
    return i >= 35;
  })
);

// If we have only one return statement then ---->  we can remove the block
console.log(ar.filter(i => i >= 35));
*/

// ! ======== Map Method =========
var salaries = [50, 75, 105, 150, 260, 120, 360, 420];

// ? 1. create one empty array
// ? 2. iterate
// ? 3. push updated element into empty array

// ? Case 1 : for
/*
console.log(salaries);
var newSalaries = [];
console.log(newSalaries); // []

for (let i = 0; i < salaries.length; i++) {
  console.log("old -", salaries[i], "new -", salaries[i] + 50);

  newSalaries.push(salaries[i] + 50);
}

console.log(newSalaries); 
*/

// ? Case 2 : for of
/*
console.log(salaries);
var newSalaries = [];
console.log(newSalaries);

for (let i of salaries) {
  newSalaries.push(i + 50);
}
console.log(newSalaries);
*/

// ? Case 3:  map method with named function
// It will iterate through an array.
// It requires a callback fn.
// ~ collectionName.map(callbackfn);
// callbackfn function requires a variable for iteration
//  and it should return the update value.
/*
console.log(salaries);
console.log(salaries.map(updateFn));

function updateFn(i) {
  return i + 50;
}
*/

// ? Case 3.1 : map method with arrow fn
/*
console.log(salaries);

// As we have only one parameter then parenthesis is not required.
console.log(
  salaries.map(i => {
    return i + 50;
  })
);

// As we have only one return statement then block is not required.
console.log(salaries.map(i => i + 50));
*/

// ! ====== Reduce method =======
var expensives = [152, 320, 125, 265, 235, 216, 350];
// WAP to find the total expensives in a week.

// ? Case 1: for
// ~~~~~~ we need a container ~~~~~~~~~~
// ~~~ we need a variale for iteration ~~~~
/*
let total = 0;
console.log(total);

for (let i = 0; i < expensives.length; i++) {
  console.log(expensives[i]);

  total += expensives[i];
}
console.log(total);
*/

// ? Case 2: for of
/*
var expensives = [152, 320, 125, 265, 235, 216, 350];

let total = 0;
console.log(total);

for (let i of expensives) {
  console.log(i);

  // total = total + i;
  // total = 0 + 152;
  // total = 152 + 320;
  // total = 472 + 125;
  // and so on.

  total = total + i;
  // total += i;
}
console.log(total);
*/

// ? Case 3: reduce method with named function
// It will iterate through an array
// It will add all the elements into one variable.
// It will return a singleValue as output.

//~ Syntax: singleValue = collectionName.reduce(callbackFn,intialValue);

// the callback should contain 2 paramters
// 1. for container  2. for iterating

// container by default fill the first element of an array.
// If we want to provide a defined value then ----> we have to pass intialValue for reduce method.

/*
var expensives = [152, 320, 125, 265, 235, 216, 350];
console.log(expensives);

console.log(expensives.reduce(reducerFunction, 0));

function reducerFunction(total, i) {
  console.log(total); // 0
  return total + i;
}
*/

// for first iteration  ----- total  = 152
// for next iterations  ----- total  = previous total + i

// ? Case 3.1 reduce method with arrow fn
var expensives = [152, 320, 125, 265, 235, 216, 350];
console.log(expensives);

let singleValue = expensives.reduce((total, i) => total + i, 0);

console.log(singleValue);

// in js =====? it will return singleValue
// in react or redux =====? it will return value , function

// ? Example 2:
var ar = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log(ar);

// for of:
/*
let word = "";
console.log(word); // ""

for (let i of ar) {
  console.log(word); // " "  , J , Ja , Jav , Java , JavaS , JavaSc , JavaScr , JavaScri , JavaScrip , JavaScript
  word = word + i;
}
console.log(word); // "JavaScript"
*/

// let output = ar.reduce(callbackfn, intitialValue);

// ? =====
// var output = ar.reduce(function (word, i) {
//   console.log(word); //"keshav" , J , Ja , Jav,  Java , JavaS , JavaSc , JavaScr , JavaScri , JavaScrip , JavaScript

//   return word + i;
// }, "");

// console.log(output);

// ? =====
var output = ar.reduce((word, i) => word + i, "");
console.log(output);
