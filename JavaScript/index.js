// document.write("Bye Rishi...");

// console.log("Bye Harsh....");

// ! ===== Declarations =====
// !         Declaration Initialization Re-Declaration Re-Initialization
// ? Var        ✅              ✅          ✅              ✅
// ? let        ✅              ✅          ✖️              ✅
// ? const      ✖️===== ✅ =====✖️          ✖️              ✖️

// ! Var:
var a;
console.log(a); // undefined

a = 10;
console.log(a); // 10

var a;
console.log(a); // 10

a = "TEN";
console.log(a); // TEN

// ! Let:
let b;
console.log(b);

b = 20;
console.log(b);

// let b;
// console.log(b); //! Uncaught SyntaxError: Identifier 'b' has already been declared

b = "TWENTY";
console.log(b); // TWENTY

// ! const
// const c;
// console.log(c); //! Uncaught SyntaxError: Missing initializer in const declaration

const c = 30;
console.log(c); 

// const c;
// console.log(c); //! Uncaught SyntaxError: Identifier 'c' has already been declared

// c = "THIRTY";
// console.log(c); // ! Uncaught TypeError: Assignment to constant variable.

