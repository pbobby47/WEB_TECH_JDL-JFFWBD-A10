// ! === SCOPE ====
/*
    Scope is the visibility of a variable.
    types of scopes:
        1. global scope:
            If any variable is declared with var it will comes under global scope.
            values will be undefined.
        2. script scope:
            If any variable is declared with let/const it will comes under script scope.
            values will be value unavailable.
        3. local scope
        4. lexical scope
*/
// ! Global scope
/*
console.log("start");
var a = 10;
console.log(a);

var b = 20;
console.log(b);

var c = 30;
console.log(c);

console.log("end");
*/

// ! script scope
/*
console.log("start");
let a = 10;
console.log(a);

let b = 20;
console.log(b);

let c = 30;
console.log(c);

console.log("end");
*/

/*
console.log("start");
const a = 10;
console.log(a);

const b = 20;
console.log(b);

const c = 30;
console.log(c);

console.log("end");
*/

// ! ============= Hoisting =========
/* The process of accessing the variables before is initialazation is called Hoisting.
variable should be declared with var */

// console.log(a);

// var a;
// console.log(a); // undefined

// var a = 20;
// console.log(a); // 20

// var a = 10;
// console.log(a); // 10

// ! ============= Temporal Dead Zone ===============

/* The process of accessing the variables before its initialazation and the variable declared with let / const is called temporal Dead Zone.
 */

console.log(a); //! scopes.js:79 Uncaught ReferenceError: Cannot access 'a' before initialization

let a = 10;
console.log(a);

let b = 20;
console.log(b);

let c = 30;
console.log(c);
