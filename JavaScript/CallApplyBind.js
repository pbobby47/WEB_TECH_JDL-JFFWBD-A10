// ! ==== Call Apply Bind ======
/*!
    We can barrow the functions into an object.
    call, apply, bind are exactly similar the ony difference in syntax.

    // ? Call:
    functionRef.call(objectName , params1 , params2 , params3);

    // ? Apply:
    functionRef.apply(objectName , [params1 , params2 , params3]);
    we have to pass the params in an array.

    // ? bind:
    functionRef.bind(objectName , params1 , params2 , params3)();
    bind is required to invoke the function 
    where for call and apply its not required.
*/

// ? Case 1: without any methods
/*
let megha = {
  sname: "megha",
  course: "JFS",
  greet: function () {
    console.log("This is a huge function with 1000+ lines");
    return "Hii Hello, How are You!!!";
  },
};
console.log(megha);
console.log(megha.greet());

let shubham = {
  sname: "shubham",
  course: "PFS",
  greet: function () {
    console.log("This is a huge function with 1000+ lines");
    return "Hii Hello, How are you!!!";
  },
};
console.log(shubham);
console.log(shubham.greet());

let ishani = {
  sname: "ishani",
  course: "MERN",
  greet: function () {
    console.log("This is a huge function with 1000+ lines");
    return "Hii Hello, How are you!!!";
  },
};
console.log(ishani);
console.log(ishani.greet());
*/

// ? Case 2: with call method
/*
let ritik = {
  sname: "ritik",
  course: "JFS",
  sayHello: function () {
    return "Hii Hello, How are you???";
  },
};

console.log(ritik);
console.log(ritik.sname);
console.log(ritik.course);
console.log(ritik.sayHello);
console.log(ritik.sayHello());

let shivani = {
  sname: "shivani",
  course: "PFS",
};

//? Syntax: funtionReference.call(objName);
console.log("for shivani,call -", ritik.sayHello.call(shivani));
console.log("for shivani,Apply -", ritik.sayHello.apply(shivani));
console.log("for shivani,Bind -", ritik.sayHello.bind(shivani)());

let rajinikant = {
  sname: "rajinikant",
  course: "MERN",
};

console.log(ritik.sayHello.call(rajinikant));
*/

// ? Case 3: call apply bind along with the params.
/*
let saquib = {
  sname: "saquib",
  salary: 50000,
  printSalaryMessage: function (inc, bonus) {
    return `
            Hii ${this.sname} , your actual salary is ${this.salary} ,
            you got an incentives of ${inc} and bonus of ${bonus}. 
            Your total income of this month is ${this.salary + inc + bonus}
        `;
  },
};
console.log(saquib);
console.log(saquib.printSalaryMessage);
console.log(saquib.printSalaryMessage(4000, 6000));

let raviKumar = {
  sname: "Ravi Kumar",
  salary: 45000,
};
console.log(raviKumar);

// ~ Call: Syntax: functionRef.call(objName , p1 , p2 , ...);
var message = saquib.printSalaryMessage.call(raviKumar, 6500, 2000);
console.log("from call -", message);

// ~ Apply: Syntax: functionRef.apply(objName , [p1 , p2 , ...]);
var message = saquib.printSalaryMessage.apply(raviKumar, [6500, 2000]);
console.log("from apply -", message);

// ~ Bind: Syntax: functionRef.bind(objName , p1 , p2 , ...)();
var message = saquib.printSalaryMessage.bind(raviKumar, 6500, 2000)();
console.log("from bind -", message);

let utkarsh = {
  sname: "utkarsh",
  salary: 65000,
};
console.log(utkarsh);

// ~ Task: call apply bind for utkarsh also.

*/

// ? Case 4 : function at outside the objects
function declareRatings(ratings) {
  console.log(this);
  return `
  Hello ${this.sname} / ${this["sname"]}, your rating in this mock is ${ratings}
  `;
}

let sarita = {
  sname: "Sarita",
  subject: "Java",
};

// ~ call: Syntax: functionRef.call(objName , p1 , p2 ,...);
var informRatings = declareRatings.call(sarita, 1);
console.log("sarita - call", informRatings);

// ~ apply: Syntax: functionRef.apply(objName , [p1 , p2]);
var informRatings = declareRatings.apply(sarita, [1]);
console.log("sarita - apply", informRatings);

// ~ bind: Syntax: functionRef.bind(objName , p1 , p2 ,...)();
var informRatings = declareRatings.bind(sarita, 1)();
console.log("sarita - bind", informRatings);

let rahul = {
  sname: "Rahul",
  subject: "React JS",
};

let suraj = {
  sname: "Suraj",
  subject: "Python",
};
// ~ Task: call apply bind for rahul and suraj too.
