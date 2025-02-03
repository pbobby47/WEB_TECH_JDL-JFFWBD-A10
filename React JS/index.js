/*
Modules are used to break large amount of code into smaller pieces.
We have 2 types of exports
        1. default export
        2. named export

? 1. Default:
At a time we can able export only one default.
While importing we can call with any variable name

? 2. Named:
If we want to export more than one we perfer this way.
While importin we have to keep our variables in expression.
*/

// ! ======== importing File ==========
//  ! ==== Default Import ====
// import sname from "./code.js";
// console.log(sname);

// import sid from "./code.js";
// console.log(sid);

// import skills from "./code.js";
// console.log(skills);

// import data from "./code.js";
// console.log(data);

//  ! ==== Named Import ====
// ? Case 1:
/*
import { product2 } from "./code.js";
import { product5 } from "./code.js";

console.log(product2); // cars
console.log(product5); // petrol
*/

// ? Case 2:
/*
import { product2 } from "./code.js";
import { product5 } from "./code.js";

console.log(product2); // cars
console.log(product5); // petrol
*/

// ? Case 3:
/*
import { product1, product2, product3, product4, product5 } from "./code.js";

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);
*/

// ? Case 4:
/*
import { addition, subtraction, multiplication, division } from "./code.js";

function sum(a, b) {
  return a + b;
}
console.log(sum);
console.log(sum(10, 20));

console.log(addition);
console.log(addition(10, 20));

console.log(subtraction);
console.log(subtraction);

console.log(multiplication);
console.log(division);
*/

// ? Case 5:
/*
import { add, sub, multiply, divide } from "./code.js";

console.log(add);
console.log(sub);
console.log(multiply);
console.log(divide);
*/

// ? Case 5.1:
// Passing alias name while importing
/*
import {
  add as shivani,
  sub as deepak,
  multiply as tanmay,
  divide as keshav,
} from "./code.js";

console.log(shivani);
console.log(shivani(10, 20));
console.log(deepak);
console.log(deepak(10, 20));
console.log(tanmay);
console.log(tanmay(5, 5));
console.log(keshav);
console.log(keshav(9, 3));
*/

// ? Case 5.2:
import * as allFunctions from "./code.js";

console.log(allFunctions);

console.log(allFunctions.add);
console.log(allFunctions.add(10, 20));
console.log(allFunctions["add"]);
console.log(allFunctions["add"](10, 20));

console.log(allFunctions.sub);
console.log(allFunctions.multiply);
console.log(allFunctions.divide);
