// ! ================ SPREAD OPERATOR ===================
// It will spread the data into the data type we specified
// If we enclose inside array the data will become array data
// If we enclose inside object the data will become object data
// Syntax: ...variableName

// ? Example 1:
var ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(...ar);
console.log([...ar]); // If we are spreading into array it will become array
console.log({ ...ar }); // If we are spreading into object it will become object

// ? Example 2:
var ar1 = [10, 20, 30, 40, 50];
var ar2 = [60, 70, 80, 90, 100];

var newArray = [ar1, ar2];
console.log(newArray); // [ [10, 20, 30, 40, 50] , [60, 70, 80, 90, 100] ]

var newArray = [...ar1, ar2];
console.log(newArray); // [ 10 ,20,30,40,50 , [60, 70, 80, 90, 100]]

var newArray = [ar1, ...ar2];
console.log(newArray); // [ [10, 20, 30, 40, 50], 60, 70, 80, 90, 100 ]

var newArray = ["vikas", ...ar1, "utkarsh", ar1, "shivani", ...ar2, "megha"];
console.log(newArray); // ["vikas", 10, 20, 30, 40, 50, "utkarsh", [10, 20, 30, 40, 50], "shivani", 60, 70, 80, 90, 100 , "megha"]

var newArray = [...ar1, ...ar1, ...ar1];
console.log(newArray); // [ 10, 20, 30, 40, 50,10, 20, 30, 40, 50, 10, 20, 30, 40, 50]

var newArray = [...ar1];
console.log(newArray); // [ 10,20,30,40,50 ]

var newObj = { ...ar1 };
console.log(newObj); // {0 : 10, 1: 20, 2: 30, 3: 40, 4: 50}; // index will act as key

var newObj = { ...ar2 };
console.log(newObj); // { 0: 60 , 1: 70 , 2: 80 , 3: 90, 4: 100  }

var newObj = { ...ar1, ...ar2 };
console.log(newObj); // {  0: 10, 1: 20, 2: 30, 3: 40, 4: 50 , 0: 60 , 1: 70 , 2: 80 , 3: 90, 4: 100 } ---> { 0 : 60 , 1: 70 , 2: 80 , 3: 90 , 4: 100}

var obj = {
  sname: "Nazme",
  age: 20,
  age: 25,
};
console.log(obj); // { sname: "Nazme", age: 20, age: 25 } ---> { sname: "Nazme", age: 25 }

var newObj = { ...ar1, ...ar2, sname: "megha", 3: "react", 2: "Nazme" };
console.log(newObj); // { 0: 60 , 1: 70 , 2: "Nazme" , 3:"react" , 4: 100 , sname:"megha"}

var newObj = { ...ar2, sname: "megha", 3: "react", 2: "Nazme", ...ar1 };
console.log(newObj);
// { 0: 60 , 1: 70 , 2: 80 , 3: 90, 4: 100 , sname: "megha", 3: "react", 2: "Nazme",0 : 10, 1: 20, 2: 30, 3: 40, 4: 50 }
// { 0: 10 , 1: 20 , 2: 30 , 3: 40, 4: 50 , sname: "megha"}

var ar1 = [10, 20, 30, 40, 50];
var ar2 = [60, 70, 80];

var newObj = { ...ar1, ...ar2 };
console.log(newObj); // { 0:60, 1:70, 2:80, 3:40, 4:50}

var obj1 = {
  sname: "vikas",
  age: 20,
  course: "react js",
};

var obj2 = {
  sname: "kehsav",
  age: 25,
};

var newObj = { ...obj1, ...obj2 };
console.log(newObj); // { sname:"keshav" , age: 25 , course:"react js"}

var newObj = { ...obj1, obj2 };
console.log(newObj); // {  sname:"vikas" , age : 20 , course :"react js", obj2: {sname:"keshav" , age: 25 } }

var obj3 = {
  age: 35,
  course: "Node JS",
};

var newObj = {
  firstObj: obj1,
  secondObj: obj2,
  thirdObj: obj3,
};
console.log(newObj); // {firstObj: {…}, secondObj: {…}, thirdObj: {…}}

var newObj = {
  obj1: obj1,
  secondObj: obj2,
  obj3: obj3,
};
console.log(newObj); // {obj1: {…}, secondObj: {…}, obj3: {…}}

var newObj = {
  obj1: obj1,
  obj2: obj2,
  obj3: obj3,
};
console.log(newObj); // {obj1: {…}, obj2: {…}, obj3: {…}}

var newObj = {
  obj1,
  obj2: obj2,
  obj3: obj3,
}; // if the key name and value both are same then its not required to write twice.
console.log(newObj); // {obj1: {…}, obj2: {…}, obj3: {…}}

var newObj = {
  obj1,
  obj2,
  obj3,
}; // if the key name and value both are same then its not required to write twice.
console.log(newObj); // {obj1: {…}, obj2: {…}, obj3: {…}}

var newObj = { ...obj1, obj2: obj2 };
console.log(newObj); // {  sname:"vikas" , age : 20 , course :"react js", obj2: {sname:"keshav" , age: 25 } }

var newObj = { ...obj1, obj2 };
console.log(newObj); // {  sname:"vikas" , age : 20 , course :"react js", obj2: {sname:"keshav" , age: 25 } }

var existingData = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
};

var recentlyReceviedData = {
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

var newObj = { existingData, recentlyReceviedData };
console.log(newObj); // {existingData: {…}, recentlyReceviedData: {…}}

var newObj = { ...existingData, ...recentlyReceviedData };
console.log(newObj); // {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}

var ar1 = ["Vikas", 20, "React JS"];

var obj = {
  sname: "vikas",
  1: 25,
  2: "Node JS ",
  course: "Express JS",
};

var newObj = { ...ar1, ...obj };
console.log(newObj);
// { 0 : "vikas" , 1 : 20 , 2: "React JS" , sname;"Vikas" , 1 : 25 , 2 : "Node JS" , course :"Express JS" }
// { 0 : "vikas" , 1 : 25 , 2: "Node JS" , sname;"Vikas", course :"Express JS" }

var obj = {
  sname: "vikas",
  1: 25,
  2: "Node JS ",
  course: "Express JS",
};

var ar = [10, 20, 30];

var newArray = [...ar];
console.log(newArray); // [ 10, 20, 30 ]

console.log(obj);
// console.log(...obj); //! ERROR
// Object data we cannot spread into another data type or simple spread also not possible
console.log({ ...obj });
// console.log([...obj]); //! ERROR

// var newArray = [...ar , ...obj];
// console.log(newArray); // [ 10, 20, 30 ,  ]

console.log(ar);
console.log(typeof ar); // object
console.log({ ...ar });

// ? NOTE: objects we cannot spread into array types.

// ! ================ REST OPERATOR / REST PARAMETERS ===================
console.log("=========== REST OPERATOR / REST PARAMETERS ===========");

//? sum of 2 numbers
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20)); // 30
// console.log(sum(10, 20, 30)); // 30 ===> 10 will store in a and 20 in b and 30 in nothing.
// console.log(sum(10)); // NaN ==> 10 + undefined

//? sum of 3 numbers
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(10, 20, 30)); // 60
// console.log(sum(10, 20, 30, 40, 50, 60)); // 60
// console.log(sum(10, 20)); // NaN
// console.log(sum(10)); // NaN

// ? sum of 4 numbers
// so by using regular process,
// for sum of x numbers we have to use x parameters.
// so we have to create multiple functions for each sum of x numbers.

// ? using rest parameters /operator
function sum(a, b, c, ...d) {
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
  console.log(d); // [40, 50, 60, 70, 80, 90, 100]
}
sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

function students(starRatings, oneRatings, ...remainingStudents) {
  //! Uncaught SyntaxError: Rest parameter must be last formal parameter
  console.log(starRatings);
  console.log(oneRatings);
  console.log(remainingStudents);
}
students("Shubham", "Ravi kumar", "shivam", "megha", "Nazme", "Rizwan", "Prabal", "Keshav aias Pankaj", "Narender");

function sum_of_n_numbers(...numbers) {
  console.log(numbers);  

  var total = 0;

  for (let num of numbers) {
    total += num;
  }
  console.log(total);
}
sum_of_n_numbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 500);

// ? Rest Operator in Destructuring:
var ar = [10, 20, 30, 40, 50, 60, 70, 80];
var [a, b, ...c] = ar;
console.log(a);
console.log(b);
console.log(c);

var ar = [1, 2, 3, [40, 50, 60, 70], 8, 9, 10];
var [a, b, c, [d1, d2, ...d3], e, f, g] = ar;
console.log(d1); // 40
console.log(d2); // 50
console.log(d3); // [60 , 70]

var obj = {
  sname: "Megha",
  course: "JavaFullStack",
  skills: ["Java", "SQL", "HTML", "CSS", "JavaScript", "TailwindCSS", "React JS"]
}

var { sname, ...x } = obj;
console.log(x);

var { sname, course, skills: [first, second, ...webTech] } = obj;
console.log(sname); // Megha
console.log(course); // JavaFullStack
console.log(first); // Java
console.log(second); // SQL
console.log(webTech); // ["HTML", "CSS", "JavaScript", "TailwindCSS", "React JS"]