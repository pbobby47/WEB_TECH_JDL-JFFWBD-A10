// ! ==== Object =====
// It is a special way of storing the data in the form of key and value pair.

// ? ======== Creation =========
var obj = {
  sname: "Parsa",
  age: 22,
  skills: ["Python", "SQL", "React", "MONGODB", "NODE JS", "EXPRESS JS"],
  course: "PFS",
  isPlaced: true,
  ratings: 0,
  47: "Rider",
};
console.log(obj);

// ? ======== Retrieving =========
// ~ 1. Dot Notation ---> objectName.keyName
console.log(obj.sname);
console.log(obj.age);
console.log(obj.skills);
console.log(obj.ratings);
// console.log(obj.47); //! we cannot access the number key's by using dot notation

// ~ 2. Bracket Notation ---> objectName["keyName"]
console.log(obj["sname"]);
console.log(obj["age"]);
console.log(obj["skills"]);
console.log(obj["ratings"]);
// console.log(obj[ratings]); //! Uncaught ReferenceError: ratings is not defined
console.log(obj["47"]); // Rider
console.log(obj[47]); // Rider

var ratings = "age";
console.log(obj[ratings]);

// If we pass without strings compiler will think it is a variable

// ~ ======= creating key =====
// objName.key = value;
// objName["key"] = value;

obj.address = "Delhi";
obj.girlFriend = "Rakhi sawant";
obj.exGirlFriend = "urffi";
obj["boyfriend"] = "Rishi";

console.log(obj);

// ? ======== Upating =========
// objName.existingkey = newValue;
// objName["existingkey"] = newValue;

obj.sname = "Parsa Singh";
obj.age = 25;
obj["course"] = "MERN STACK";
obj["skills"] = ["MONGODB", "EXPRESS", "React JS", " NODEJS"];

console.log(obj);

// ? ======== Deletion =========
delete obj.exGirlFriend;
delete obj["boyfriend"];
delete obj["isPlaced"];
// delete obj.47; //! Error
delete obj["47"];

console.log(obj);

// ! ================= Object Methods =================
var obj = {
  sname: "Vikas",
  age: 20,
  course: "JavaScript",
};
console.log(obj);

// ? ==== keys ====
// It will return all the keys present in an obj
// ~ Object.keys(objName)
console.log("Keys - ", Object.keys(obj));

// ? ==== Values ====
// It will return all the values present in an obj
// ~ Object.values(objName)
console.log("Values - ", Object.values(obj));

// ? ==== entries ====
// It will return all the keys and values present in an obj
// ~ Object.entries(objName)
console.log("Entries - ", Object.entries(obj));

// ? ==== hasOwnProperty ====
// It will check the property is present or not.
// It will return a boolean as output
// ~ ObjName.hasOwnProperty("keyname");
console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("skills"));

// ? ===== concat -- assign ====
// It will merge 2 or more objects together.
// ~  Object.assign(obj1 , obj2 , obj3);
// All the object will store in the first parameter

// ? == Case 1 ==
var obj1 = {
  sname: "Rishi",
  age: 20,
};

var obj2 = {
  course: "React JS",
  skills: ["html", "css", "js", "sql", "java"],
};

var obj3 = {
  streetNo: 420,
  landmark: "confidential",
  state: "delhi",
  pincode: 123456,
};

console.log("obj1 -", obj1);
console.log(obj2);
console.log(obj3);

var mergedObj = Object.assign({}, obj1, obj2, obj3); // to prevent the chages in obj1 we are using empty {}.
console.log(mergedObj);

console.log("obj1 -", obj1);
console.log(obj2);
console.log(obj3);

// ? == Case 2 ==
var newObj = Object.assign(
  {},
  { name: "aviral", age: 20 },
  { course: "js" },
  { address: "delhi" }
);
console.log(newObj);

// ? == Case 3 ==
var object1 = {
  sname: "Rishi",
  age: 20,
};

var object2 = {
  course: "React JS",
  sname: "Shivani",
};

var object3 = {
  course: "javaScript",
  age: 25,
};

var mergedObj = Object.assign({}, object3, object1, object2);
console.log(mergedObj);

// ! =========== dive more into Objects ===========
console.log("=== dive more into Objects ===");
// we can create an object in 3  ways
// 1. object literals  2. new keyword  3. contructor

// ? 1. ======= Object Literals =======
var obj = {
  sname: "sunny",
  age: 20,
  course: "js",
};
console.log(obj);

// ? 2. ======= new keyword =======
// var ar = new Array(10, 20, 30);
// console.log(ar); // [10,20,30]

// var ar = new Array();
// console.log(ar); // []

// ar[0] = 10;
// ar[1] = 20;
// ar[2] = 30;
// console.log(ar); // by adding new elements  --> [10,20,30]

// ~ Case1:
var obj = new Object({ sname: "sunny", age: 20, course: "js" });
console.log(obj);

// ~ Case2:
var obj = new Object();
console.log(obj);

obj.sname = "sunny";
obj.age = 20;
// obj["course"] = "js";
obj.course = "js";

console.log(obj); // by adding properties --> { sname: "sunny", age: 20, course: "js" }

// ? ======= Constructor =======
class Student {
  constructor(para1, para2, para3) {
    console.log(para1);
    console.log(para2);
    console.log(para3);

    console.log(this); //  current object without key's

    this.name = para1;
    this.age = para2;
    console.log(this); // current object with 2 keys

    this.course = para3;
    console.log(this); // current object with 3 key's

    this.address = "Delhi";
    console.log(this); // current object with 4 key's
  }
}

let parsa = new Student("parsa", 20);
// console.log(parsa);

let rishi = new Student("rishi", 22, "JFS");
// console.log(rishi);

let aviral = new Student("aviral", 23, "MERN");
// console.log(aviral);

let nadir = new Student("nadir", 24, "PFS");
// console.log(nadir);

// ! =======================
console.log("start");

class Employee {
  constructor(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
  }
}
console.log(Employee);

let emp1 = new Employee("userOne", 20, "frontend dev");
console.log(emp1);

let emp2 = new Employee("userTwo", 25, "backend dev");
console.log(emp2);

console.log("end");
