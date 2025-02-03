// ! ======== Exporting File ==========
// ! ==== Default Export ====
let sname = "Shivani";
// export default sname;

let sid = 100123;
// export default sid;

let skills = ["html", "css", "js", "sleeping", "watching", "goosips"];
// export default skills;

let obj = {
  sname: "Tanmay",
  age: 20,
  course: "React  JS",
  skills: ["Html", "css", "js"],
};
// export default obj;

// ! ==== Named Export ====
// ? Case 1:
/*
let product1 = "smart phone";
export let product2 = "cars";
let product3 = "Bikes";
let product4 = "clothes";
export let product5 = "Petrol";
*/

// ? Case 2:
/*
let product1 = "smart phone";
let product2 = "cars";
let product3 = "Bikes";
let product4 = "clothes";
let product5 = "Petrol";

export { product2 };
export { product5 };
*/

// ? Case 3:
/*
let product1 = "smart phone";
let product2 = "cars";
let product3 = "Bikes";
let product4 = "clothes";
let product5 = "Petrol";

export { product1, product2, product3, product4, product5 };
*/

// ? Case 4:
/*
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

export { addition, subtraction, multiplication, division };
*/

// ? Case 5:
// Passing alias name while exporting
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

export {
  addition as add,
  subtraction as sub,
  multiplication as multiply,
  division as divide,
};

let trainerName = "Bobby";
export default trainerName;
