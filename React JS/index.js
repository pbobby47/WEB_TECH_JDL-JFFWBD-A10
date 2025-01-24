// ! ========== Modules ===============
/*! 
Modules are used to breakdown the large amount of code into smaller peices.
Code Reusability is more, we can use any files.
Modules are classified into 2 ways:
    1. default
    2. named

// ? Default:
1. We cannot export more than one default data.
2. To Export:
    export default variableName;
3. To import:
    import variableName from "path address";
4. While import we can call the data with any name.
5. From the same module we can import n no.of times into n.of diffrent variables.

// ? Named:

*/

// ! ====== Default Import ======
// Syntax: To import default data ----> import anyVariableName from "pathaddress";

// import a from "./demo.js";
// import b from "./demo.js";
// import c from "./demo.js";
// import d from "./demo.js";
// import e from "./demo.js";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// import data from "./demo.js";
// console.log(data);

// ! ============== Named Import ================
// Syntax: we have to use an expression

// ? Case 1:
/*
import { product2 } from "./demo.js";
console.log(product2);

import { product5 } from "./demo.js";
console.log(product5);
*/

// ? Case 2:
/*
import { product2, product3, product5 } from "./demo.js";

console.log(product2);
console.log(product3);
console.log(product5);
*/

// ? Case 3:
/*
import { addition, subtraction, multiplication, division } from "./demo.js";

console.log(addition);
console.log(addition(10, 20));
console.log(addition(5, 2));

console.log(subtraction);
console.log(subtraction(20, 10));
console.log(subtraction(-50, 10));

console.log(multiplication);
console.log(multiplication(2, 5));
console.log(multiplication(10, 15));

console.log(division);
console.log(division(5, 2));
console.log(division(10, 5));
*/

// ? Case 4:
/*
import { add, sub, multiply, divide } from "./demo.js";

console.log(add);
console.log(add(10, 20));
console.log(add(5, 2));

console.log(sub);
console.log(sub(10, 20));

console.log(multiply);
console.log(multiply(4, 5));

console.log(divide);
console.log(divide(40, 2));
*/

// ? Case 4.1:
/*
import { add as a, sub as b, multiply as c, divide as d } from "./demo.js";

console.log(a);
console.log(a(10, 20));
console.log(a(5, 2));

console.log(b);
console.log(b(10, 20));

console.log(c);
console.log(c(4, 5));

console.log(d);
console.log(d(40, 2));
*/

// ? Case 4.2:
import * as allFunctions from "./demo.js";

console.log(allFunctions);
console.log(typeof allFunctions);

console.log(allFunctions.add);
console.log(allFunctions.add(10, 20));
console.log(allFunctions["add"](10, 20));

console.log(allFunctions.sub);
console.log(allFunctions.multiply);
console.log(allFunctions.divide);
console.log(allFunctions.default);
