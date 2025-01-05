// ! ============ Loops ==============
/*
    1. for loop
    2. while loop
*/

var ar = ["Aviral", "shivam", "sunny", "keshav", "megha", "ishani"];
console.log(ar);

// ? ==== for in ====
// It will iterate through a collection.
// It will return all the indexes.

// for (let i = 0; i < ar.length; i++) {
//   console.log(i, ar[i]);
// }

// ? Syntax:
// for (let variableName in Collection) {
//         // code
// }

console.log(ar);
console.log("for in will iterate on indexes");
for (let i in ar) {
  console.log(i);
}

// ? ==== for of ====
// It will iterate through a collection.
// it will return all the values.

// ? Syntax:
// for (let variableName of collection) {
//     // code
// }

console.log(ar);
console.log("for of will iterate on values");

for (let i of ar) {
  console.log(i);
}

// ? ==== forEach() ====
// It is a method,
// It will iterate on both index and values

console.log(ar);
console.log("forEach() will iterate on indexes and values");

// ~ Syntax: collectionName.forEach(callbackfn);
// The callback should contains 2 parameter
// one will store indexes and other will store values.
// first parameter for value and second for index.

ar.forEach((val, ind) => {
  console.log(val);
  console.log(ind);
});

// ! ============= example 2 ==============
var ar = [10, 20, 30, 40, 50];
console.log(ar);

// ? WAC to iterate on indexes
for (let i in ar) {
  console.log(i);
}

// ? WAC to iterate on values
for (let i of ar) {
  console.log(i);
}

// ? WAC to iterate on index and values
ar.forEach((val, ind) => {
  console.log(ind, val);
});

// ? WAC to iterate on index and values, start the sequence order with 1 by  passing ind + 1.
ar.forEach((val, ind) => {
  console.log(ind + 1, val);
});

// to remember --->
// for in -----> in stands for indexes
