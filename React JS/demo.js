// ! ============== Default Export ====================
// Syntax: To export deaultly ---> export default variableName;

let sname = "Keshav";
// export default sname;

let sid = 10025;
// export default sid;

let ar = ["Shubham", "Vikas", "Rishabh", "Nazme", "keshav", "Narender"];
// export default ar;

let obj = {
  sname: "Vikas",
  course: "React JS",
  institute: "Qspiders",
  trainerName: "Bobby",
  collegeName: "XYZ college",
};
// export default obj;

// ! =================== Named Export ==================
// ? Case 1:
/*
let product1 = "Wheat";
export let product2 = "Rice";
let product3 = "Mirchi";
let product4 = "Maize";
export let product5 = "Oil";
*/

// ? Case 2:
/*
let product1 = "Wheat";
let product2 = "Rice";
let product3 = "Mirchi";
let product4 = "Maize";
let product5 = "Oil";

export { product2, product3, product5 };
*/

// ? case 3:
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

// ? case 4:
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

let mydata = "Namaste Bharat";
export default mydata;
