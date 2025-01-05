// ! ============== JSON ===============
/*
JSON stands for JavaScript Object Notation
JSON taken the ref from JS so they named JavaScript Object Notation
so, its very simple to convert the data 
    from json to js 
        and
    from js to json.
JSON is very light weight language to store and interchange the data.
JSON will store the data in the form of string
JSON is a format for storing and transporting the data.
JSON is language independent.
Data types:
    object, array , string , boolean , number , null

!           JSON Object         vs           JS Object
?===========================================================
1.   string format                         regular js object
2.   key should be in string               key may be or may not
3.   no variable Name required             variable required
4.   requires a parent as array / object   ======

*/
// JSON allows lot of formats to store the data.
// ? Case 1: Array
var data = ["vikas", 101, "React js", "delhi"];

// ? Case 2: Object
var data = {
  sname: "vikas",
  sid: 101,
  course: "react js",
  location: "delhi",
};

// ? Case 3: Array inside Array
var data = [
  ["vikas", 101, "React js", "delhi"],
  ["shivani", 102, "MERN", "Noida"],
  ["Nazme", 103, "NEXT JS", "bhopal"],
  ["utkarsh", 104, "NODE JS", "banglore"],
  ["Megha", 105, "JFS", "Hyderabad"],
];

// ? Case 4: Object inside Object
var data = {
  shivam: {
    sname: "shivam",
    sid: 101,
    course: "React  JS",
    location: "delhi",
  },
  nadir: {
    sname: "nadir",
    sid: 102,
    course: "JFS",
    location: "hyderabad",
  },
  narender: {
    sname: "narender",
    sid: 103,
    course: "Express JS",
    location: "meerut",
  },
  rahul: {
    sname: "rahul",
    sid: 104,
    course: "Node js",
    location: "Noida",
  },
  raviKumar: {
    sname: "raviKumar",
    sid: 105,
    course: "React  JS",
    location: "delhi",
  },
};

// ? Case 5: Array inside object
var data = {
  anuranjan: ["anuranjan", 101, "react js", "delhi"],
  prabal: ["prabal", 102, "react js", "delhi"],
  shivani: ["shivani", 103, "react js", "delhi"],
  keshav: ["keshav", 104, "react js", "delhi"],
  pankaj: ["pankaj", 105, "react js", "delhi"],
};

// ? Case 6: Objects inside array
var data = [
  {
    sname: "",
    sid: "",
    course: "",
    skills: {
      frontEnd: [],
      database: [],
      backend: [],
      cloud: [],
    },
    address: {
      oldAdress: {
        sreetno: "101",
        colony: "patel nagar",
        landmark: "neat metro",
        pincode: 123456,
      },
      newAdress: {
        sreetno: "1-2-3-4",
        colony: "Karol Bagh",
        landmark: "Haldirams",
        pincode: 12345789,
      },
    },
  },
  {},
  {},
  {},
  {},
];

// ? and so on combinations

// ! JSON methods:
console.log(data);
console.log(typeof data); // object
// ? JSON.stringfy ---> js to json
// It will convert the data from js to json
// Syntax: JSON.stringfy(jsvariableName);

let jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(typeof jsonData);

// ? JSON.parse --- json to js
// It will convert the data from json to js
// Syntax: JSON.parse(jsonvariableName);

let jsData = JSON.parse(jsonData);
console.log(jsData);
console.log(typeof jsData);

// ! ==========================================

var users = "paste the data from fakestoreapi";

console.log(users);

// for (let user of users) {
//     console.log(user);
// }

users.map((val, ind) => {
  //   console.log(val, ind);
  //   console.log(val.address);
  console.log(val.address.geolocation);
  console.log(val.address.zipcode);
});
