// ! ==== Array ====
// An Array is a collection of Homogeneous or Heterogenous data elements.

// ? == Creation ==
var ar = ["Parsa", 20, "MERN", ["html", "css", "js"], true, undefined];
console.log(ar);

// ? == Retreiving ==
console.log(ar[0]);
console.log(ar[2]);
console.log(ar[3]);
console.log(ar[3][1]);

// ? == updation ==
ar[5] = 50000; // if the index is present it will update
console.log(ar);

ar[6] = 4; // if the index is not present it will create and update.
console.log(ar);
// 7 , 8 , 9 ---> consider as empty
ar[10] = "Aviral";
ar[3][3] = "React JS";
ar[3][2] = "Node JS";

console.log(ar);

// ? == Deletion ==
delete ar[1];
delete ar[10];
delete ar[3][1];

console.log(ar);

// ! ============ Array Methods =============
var ar = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(ar);

// ? === pop() ===
// It will remove the element at last index.
// ~ Syntax: ar.pop();
ar.pop();
console.log(ar);

// ? === push() ===
// It will add the element at last index.
// ~ Syntax: ar.push(element);

ar.push(800);
console.log(ar);

ar.push("sunny");
console.log(ar);

ar.push(["Html", "css", "js"]);
console.log(ar);

// ? === shift() ====
// It will remove the element at 0th index.
// ~ Syntax: ar.shift()

ar.shift();
console.log(ar);

ar.shift();
console.log(ar);

// ? === unshift() ===
// It will add the element at 0th index.
// ~ Syntax: ar.unshift(element)

ar.unshift(100);
console.log(ar);

ar.unshift("shivani");
console.log(ar);

ar.unshift(["java", "python", "sql"]);
console.log(ar);

// ? === slice() ===
// It will extract the sub part of an array.
// ~ Syntax: ar.slice( SI , EI )
// EI is not included

console.log(ar.slice(3, 6));
console.log(ar.slice(7, 10));
console.log(ar.slice(0, 3));

// ? === splice() ===
// It will modify the original array.
// ~ Syntax: ar.splice(SI , no.of elements to delete , elements to add);
// Ex - 1:
var ar = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(ar);

// remove 30, 40, 50 and add 2 , 4 , dhruv , parsa
ar.splice(2, 3, 2, 4, "Dhruv", "Parsa");
console.log(ar);

// Ex - 2:
var ar = ["parsa", "shivani", "rishi", "keshav", "aviral", "rahul"];
console.log(ar);

// remove shivani , rishi and add asif, ravi, prabal
ar.splice(1, 2, "asif", "ravi", "prabal");
console.log(ar);

// Ex - 3:
var ar = [10, 20, [300, 400, 500, 600], 30, 40];
console.log(ar);

// remove 400, 500 and add kanishka , vikas , megha
// output = [10, 20, [300, "kanishka" , "vikas" , "megha", 600], 30, 40]

ar[2].splice(1, 2, "kanishka", "vikas", "megha");
console.log(ar);

// Ex - 4:
var ar = [10, 20, [300, 400, [5, 10, 15, 20], 600], 30, 40];
console.log(ar);

// replace the 5 table things with 3 table things (4)
// [5, 10, 15, 20] --> [3 , 6 , 9 , 12]

// ar[2].splice(2, 1, [3, 6, 9, 12]);
// console.log(ar);

// 5, 10, 15, 20 --> 3 , 6 , 9 , 12
ar[2][2].splice(0, 4, 3, 6, 9, 12);
console.log(ar);

// ? === toString() ===
// It will convert the data type into string.
// ~ Syntax: variableName.toString();
// by default the element will be seperated by using " , "

console.log("=== toString() ===");
var ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(typeof ar); // object

console.log(ar.toString());
console.log(typeof ar.toString());

var ar = ["parsa", "shivani", "rishi", "keshav", "aviral", "rahul"];
console.log(ar);

console.log(ar.toString());
console.log(ar.toString(" ")); // ! It will work
console.log(ar.toString("$")); // ! It will work
console.log(typeof ar.toString());

// ? === join() ===
// It will convert the array datatype into string datatype based on paramters.
// ~ Syntax: ar.join(parameter);
// by default the elements will be seperated by using " , "

console.log("=== join() ===");
var ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(ar.join()); // 10,20,30,40,50
console.log(ar.join(" ")); // 10 20 30 40 50
console.log(ar.join("$")); // 10$20$30$40$50
console.log(ar.join("$%^")); // 10$%^20$%^30$%^40$%^50
console.log(ar.join("A")); // 10A20A30A40A50
console.log(ar.join(" A ")); // 10 A 20 A 30 A 40 A 50

var ar = ["parsa", "shivani", "rishi", "keshav", "aviral", "rahul"];
console.log(ar);

// convert into string by separating with space
console.log(ar.join(" "));

// convert into string by separating with &
console.log(ar.join("&"));

// convert into string by separating with ===
console.log(ar.join("==="));

// convert into string by separating with space === space
console.log(ar.join(" === "));

// convert into string by separating with javaScript
console.log(ar.join(" javascript "));

// convert into string by separating with hello
console.log(ar.join(" hello "));

// ? === isArray() ===
// It will helps us to identify the datatype is array or not.
// ~ Syntax: Array.isArray(variableName);
// It will always return boolean as output

var ar = [10, 20, 30];
console.log(ar);
console.log(typeof ar); // object

var obj = {
  sname: "Rishi",
  age: 20,
};
console.log(obj);
console.log(typeof obj); // object

console.log(Array.isArray(ar)); // true
console.log(Array.isArray(obj)); // false

// ? === indexOf() ===
// It will return the index position of an element.
// ~  Syntax: ar.indexOf(element)
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

var ar = ["parsa", "shivani", "rishi", "keshav", "rishi", "rahul", "rishi"];
console.log(ar);

console.log(ar.indexOf("shivani")); // 1
console.log(ar.indexOf("rahul")); // 5

// 20
console.log(ar[4].indexOf(20)); // 1

// 30
console.log(ar[4].indexOf(30)); // 2

// Rishi
console.log(ar.indexOf("Rishi")); // -1

// rishi
console.log(ar.indexOf("rishi")); // 2

// ? === includes() ===
// It wil check the element is avaiable in the array or not.
// ~ Syntax: ar.includes(element)
// It will return boolean as output

var ar = ["parsa", "shivani", "rishi", "keshav", "aviral", "rahul"];
console.log(ar);

// shivani
console.log(ar.includes("shivani")); // true

// vivek
console.log(ar.includes("vivek")); // false

// rahul
console.log(ar.includes("rahul")); // true

// megha
console.log(ar.includes("megha")); // false

// ? === reverse() ===
// It will reverse the order.
// ~ Syntax: ar.reverse();

var ar = ["parsa", "shivani", "rishi", "keshav", "aviral", "rahul"];
console.log(ar);
console.log(ar.reverse());

var ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(ar.reverse());

// ? === concat() ===
// It will merge 2 or more arrays into one.
// ~ Syntax: first.concat(second, third , ...)

var ar1 = [10, 20, 30];
var ar2 = [40, 50, 60];
var ar3 = [70, 80, 90];

var mergedArray = ar1.concat(ar2, ar3);
console.log(mergedArray);

// ! =================== Creation of Array in 2nd way ==============
// new --> it will allocate the memory  in the callstack for specific data type.
// new String
// new Array
// new object

var ar = new Array();
console.log(ar); // []

var ar = new Array(10, 20, 30, 40, 50);
console.log(ar); // [ 10, 20, 30, 40, 50 ]

var ar = new Array("Aviral", "Ranjinikant", "Keshav");
console.log(ar);

var ar = new Array(10, 20);
console.log(ar); // [10,20]

var ar = new Array(10);  // Only single number we cannot store in an array by using new method. It will recognise the number as the size of the array.
console.log(ar); // [  Empty * 10]

var ar = new Array("shivani");
console.log(ar); 

var ar = new Array("10");
console.log(ar); 

