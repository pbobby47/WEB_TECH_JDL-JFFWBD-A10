// ! ======= important ****** for react =======
// ! ==== Destructuring ====
/*
It will allows us to store the data into variables.
We have 2 types of destructuring
    1. Array Destrucutring
        Syntax:   [v1 , v2 , v3 , ....] = arName;
    2. Object Destrucutring
        Syntax:   {v1 , v2 , v3 , ....} = objName;

*/
// ! Arrays:
// ? Without Destructuring:
/*
var ar = [10, 20, 30, 40, 50];

var a = ar[0];
var b = ar[1];
var c = ar[2];
var d = ar[3];
var e = ar[4];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

// ? With Destructuring:
// Syntax: var/let/const [ variablesNames  ] = arName;
/*
var ar = [10, 20, 30, 40, 50];

var [a, b, c, d, e] = ar;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

// ! Nested Arrays:
// ? Without Destructuring:
/*
var ar = [10, 20, 30, [400, 500, 600], 70, 80];
console.log(ar);

var a = ar[0];
var b = ar[1];
var c = ar[2];
var d = ar[3];
var e = ar[4];
var f = ar[5];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

var m = d[0];
var n = d[1];
var o = d[2];

console.log(m);
console.log(n);
console.log(o);
*/

// ? With Destructuring:
// ~ Explicit way
// Here we will do step by step

// var ar = [10, 20, 30, [400, 500, 600], 70, 80];
// console.log(ar);
// var [a, b, c, d, e, f] = ar;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// var [m, n, o] = d;
// console.log(m);
// console.log(n);
// console.log(o);

// ~ Implicit way
// Here we will do complete destructuring at a single time.

// var ar = [10, 20, 30, [400, 500, 600], 70, 80];
// console.log(ar);

// var [a, , c, [m, , o], , f] = ar;
// console.log(a);
// console.log(c);
// console.log(f);

// console.log(m);
// console.log(o);

// ! ==========================================================
// ! Task 1:
// var ar = [2, [4, 8, 12, 16], 6, 8, [10, 20, 30, 40], 12];
// you have to destructure it using 2 ways ---> 1. explicit way 2. implicit way

// ? Explicit way:
// var [a, b, c, d, e, f] = ar;
// console.log(a);
// console.log(b);
// console.log(e);

// var [m, n, o, p] = b;
// console.log(m);
// console.log(n);
// console.log(o);
// console.log(p);

// var [q, r, s, t] = e;
// console.log(q);
// console.log(r);
// console.log(s);
// console.log(t);

// ? Implicit Way:
// var [a, [m, n, o, p], c, d, [q, r, s, t], f] = ar;
// console.log(a)
// console.log(c);
// console.log(d);
// console.log(f);

// console.log(m);
// console.log(n);
// console.log(o);
// console.log(p);

// console.log(q);
// console.log(r);
// console.log(s);
// console.log(t);

// ! Task 2:
// var students = [
//   ["Parsa", "Kanishka", ["BGMI", "GodofWars", "Khelega Free Fire"]],
//   "Vikas",
//   [
//     "Megha",
//     "Seema",
//     "Tanmay",
//     ["Drawing", "Reading", ["Insta", "LinkedIn", "youtube"]],
//   ],
//   "utkarsh",
// ];
// you have to destructure it using 2 ways ---> 1. explicit way 2. implicit way

// ? Explicit Way:
// var [s1, s2, s3, s4] = students;
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

// var [rf1, rf2, games] = s1;
// console.log(rf1);
// console.log(rf2);
// console.log(games);

// var [g1, g2, g3] = games;
// console.log(g1);
// console.log(g2);
// console.log(g3);

// var [sf1, sf2, sf3, hobbies] = s3;
// console.log(sf1);
// console.log(sf2);
// console.log(sf3);
// console.log(hobbies);

// var [h1, h2, h3] = hobbies;
// console.log(h1);
// console.log(h2);
// console.log(h3);

// var [s1, s2, s3] = h3;
// console.log(s1);
// console.log(s2);
// console.log(s3);

// ? Implicit way:
// var [
//   [rf1, rf2, [g1, g2, g3]],
//   s2,
//   [sf1, sf2, sf3, [h1, h2, [s1, s2, s3]]],
//   s4,
// ] = students;

// ! ===== Object ====
// In case of object, It will not store data as how we written, It follows alphabetical order.
// while destrucutring we have use key's as variable Names.

// var obj = { sname: "Rishi", age: 20, Course: "React JS" };
// console.log(obj);

// var { sname, course, address, Course } = obj;
// console.log(sname); // Rishi
// console.log(course); // undefined
// console.log(Course); // React JS
// console.log(address); // undefined

// ! ====== Nested Object =====
// var obj = {
//   sname: "Shivani",
//   age: 20,
//   course: "React JS",
//   address: {
//     unitName: "Qspiders Delhi",
//     street: "101-25-123",
//     area: "Karol Bagh",
//     landmark: "Haldirams",
//   },
// };

// ~ Explicit Way:
// var { sname, age, course, address } = obj;
// console.log(sname);
// console.log(age);
// console.log(course);
// console.log(address);

// var { unitName, street, area, landmark } = address;
// console.log(unitName);
// console.log(street);
// console.log(area);
// console.log(landmark);

// ~ Implicit way:
// var {
//   sname,
//   course,
//   address: { unitName, area, landmark },
// } = obj;
// console.log(sname);
// console.log(course);
// // console.log(address); //! Error: Destructured Key's we can't able to use

// console.log(unitName);
// console.log(area);
// console.log(landmark);

// ? Passing alias name:
// var obj = {
//   firstName: "Parsa",
//   lastName: "Singh",
//   main_location: "Delhi",
// };
// console.log(obj);

// var { firstName: fname, lastName, main_location: loc } = obj;

// console.log(fname);
// console.log(lastName);
// console.log(loc);

// ? Example:
// var obj = {
//   sname: "utkarsh",
//   age: 20,
//   skills: {
//     front_end: ["html", "css", "js"],
//     back_end: ["js", "java", "python"],
//   },
//   friends: ["Hello", "Hii", "How", "are", "you"],
// };
// console.log(obj);

// ~ Explicit:
// var { sname, age, skills, friends } = obj;
// console.log(sname);
// console.log(age);
// console.log(skills);
// console.log(friends);

// var { front_end, back_end } = skills;
// console.log(front_end);
// console.log(back_end);

// console.log(typeof front_end);
// console.log(Array.isArray(front_end)); // boolean
// console.log(Array.isArray(age)); // boolean

// var [fe1, fe2, fe3] = front_end;
// console.log(fe1);
// console.log(fe2);
// console.log(fe3);

// var [be1, be2, be3] = back_end;
// console.log(be1);
// console.log(be2);
// console.log(be3);

// var [f1, f2, f3, f4, f5] = friends;
// console.log(f1);
// console.log(f2);
// console.log(f3);
// console.log(f4);
// console.log(f5);

// ~ Implicit way:
// var {
//   sname,
//   age,
//   skills: {
//     front_end: [fe1, fe2, fe],
//     back_end: [be1, be2, be3],
//   },
//   friends: [f1, f2, f3, f4, f5],
// } = obj;

// ! =========== Task: ===========
var obj = {
  sname: "shivani",
  age: 20,
  course: "React JS",
  skills: {
    front_end: {
      first_fe: ["HTML", "CSS", "JS"],
      second_fe: ["React JS", "Next JS", "Angular", "Vue"],
    },
    data_base: {
      first_db: ["sql", "plsql", "mysql", "Oracle sql"],
      second_db: ["mongodb", "nosql"],
    },
    back_end: {
      core: ["python", "java", "Node js"],
      frameworks: ["Django", "spring", "ExpressJS"],
    },
  },
  friends: [
    ["seethal", "shreya"],
    ["ruby", "megha"],
    [
      "seema",
      {
        kanishka_f1: "Rishi",
        kanishka_f2: "Parsa",
        kanishka_f3: {
          utkarsh_f1: "Keshav",
          utkarsh_f2: "vikas",
          utkarsh_f3: "sujal",
        },
      },
    ],
  ],
};

console.log(obj);

// ? Explicit:
// var { sname, age, course, skills, friends } = obj;

// // destructuring - obj
// console.log(sname);
// console.log(age);
// console.log(course);
// console.log(skills);
// console.log(friends);

// // destructuring - skills
// var { front_end, data_base, back_end } = skills;
// console.log(front_end);
// console.log(data_base);
// console.log(back_end);

// // destructuring - front_end
// var { first_fe, second_fe } = front_end;
// console.log(first_fe);
// console.log(second_fe);

// // destructuring - first_fe
// var [fe1, fe2, fe3] = first_fe;
// console.log(fe1);
// console.log(fe2);
// console.log(fe3);

// // destructuring - second_fe
// var [f4, f5, f6, f7] = second_fe;
// console.log(f4);
// console.log(f5);
// console.log(f6);
// console.log(f7);

// // destructuring - friends
// var [frd1, frd2, frd3] = friends;

// console.log(frd1);
// console.log(frd2);
// console.log(frd3);

// // destructuring - frd1
// var [frd1_1, frd1_2] = frd1;
// console.log(frd1_1);
// console.log(frd1_2);

// // destructuring - frd2
// var [frd2_1, frd2_2] = frd2;
// console.log(frd2_1);
// console.log(frd2_2);

// // destructuring - frd3
// var [frd3_1, frd3_2] = frd3;
// console.log(frd3_1);
// console.log(frd3_2);

// // destructuring - frd3_2
// var { kanishka_f1, kanishka_f2, kanishka_f3 } = frd3_2;

// console.log(kanishka_f1);
// console.log(kanishka_f2);
// console.log(kanishka_f3);

// // destructuring - kanishka_f3
// var { utkarsh_f1, utkarsh_f2, utkarsh_f3 } = kanishka_f3;
// console.log(utkarsh_f1);
// console.log(utkarsh_f2);
// console.log(utkarsh_f3);

// ? Implicit
// var {
//   sname,
//   age,
//   course,
//   skills: {
//     front_end: {
//       first_fe: [f1, f2, f3],
//       second_fe: [f4, f5, f6, f70],
//     },
//     data_base: {
//       first_db: [d1, d2, d3, d4],
//       second_db: [d5, d6],
//     },
//     back_end: {
//       core: [b1, b2, b3],
//       frameworks: [f1, f2, f3],
//     },
//   },
//   friends: [
//     [frd1_1, frd1_2],
//     [frd2_1, frd2_2],
//     [
//       frd3_1,
//       {
//         kanishka_f1,
//         kanishka_f2,
//         kanishka_f3: { utkarsh_f1, utkarsh_f2, utkarsh_f3 },
//       },
//     ],
//   ],
// } = obj;

// ? Tricks:

var ar = [10, 20, [30, 40, [500, 600], 70], 80];
var [a, b, [c1, c2, [c31, c32], c4], d] = ar;

console.log(c31);
console.log(c2);
console.log(c4);

var obj = {
  sname: "vikas",
  age: 20,
  skills: {
    front_end: ["html", "css", "js"],
    back_end: ["sql", "mongodb", "java", "node js"],
  },
};

var {
  sname,
  age,
  skills: {
    front_end: [f1, f2, f3],
    back_end: [b1, b2, b3, b4],
  },
} = obj;

console.log(b2);
console.log(age);
console.log(sname);
console.log(b4);

// var [a, b, c] = [10, 20, 30];
