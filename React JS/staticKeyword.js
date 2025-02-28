class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    console.log(this);
  }
}

let Amit = new Student("Amit", 20, "React JS");
let Shubham = new Student("Shubham", 21, "Node JS");
let ekansh = new Student("Ekansh", 22, "Express JS");

console.log("==== second Example =====");

class Person {
  constructor(fname, lname, course) {
    this.fname = fname;
    this.lname = lname;
    this.course = course;
  }

  getFullName() {
    return `My Full Name is : ${this.fname} ${this.lname} `;
  }

  getCourseFee(fee) {
    return `Course Fee for ${this.course} is ${fee}`;
  }

  static sayHello() {
    return "Hello Narender...";
  }
}

let pm = new Person("Narender", "Modi", "India Developement");
console.log(pm);

console.log(pm.getFullName());
console.log(pm.getCourseFee(5000));

console.log(Person.sayHello());
console.log(pm.sayHello());
