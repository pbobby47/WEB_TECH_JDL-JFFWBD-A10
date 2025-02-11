// ! =============== component ===============
/*
Component is block of code
Rules:
    1. Component Name should starts with uppercase.
        Ex: App.jsx , Product.jsx , Card.jsx
    2. Component can be saved with .jsx or .js extension.
    3. To use this component in other components we have to use an element
       Ex: <App> </App>
       Ex: <App />

Components are classified into 2 ways
1. Class based Component
2. Function based compoent
*/

// ? ======= Class based Components =============
/*
import { Component } from "react";

class App extends Component {
  render() {
    console.log("Hii Hello how are you????");
    return <h1>Hello , I am Class Based Component</h1>;
  }
}
export default App;
*/

// ? ======= Function based Components =============
// & Case 1:
/*
function App() {
  return <h1>Hii, I am Function based Component</h1>;
}
export default App;
*/

// & Case 2:
/*
export default function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
}
*/

// & Case 2.1:
/*
let App = function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
};
export default App;
*/

// & Case 3:
/*
export default () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
*/

// & Case 3.1:
/*
let App = () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
export default App;
*/

// & Case 4:
// we should not return more than one element.
// so we have to keep all our elements in one parent element.
/*
let App = () => {
  console.log("Heyy I am arrow function...");
    return (
      <div>
        <h1>Hii, I am function based component (Arrow function)</h1>
        <h2>Bye, I am function based component (Arrow function)</h2>
      </div>
    );
};
export default App;
*/

// & Case 5:
// In the above an unwanted div is created
// to avoid we can use React.Fragment
// React.Fragment in one empty element.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <React.Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </React.Fragment>
  );
};
export default App;
*/

// & Case 5.1 :
/*
import { Fragment } from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </Fragment>
  );
};
export default App;
*/

// & Case 5.2:
// We can use <React.Fragment></React.Fragment> as <></>.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </>
  );
};
export default App;
*/

// ! =========== JSX ============
/*
JSX stands for JavaScript XML.
JSX looks similar to HTML but stricter than HTML.
It follow some rules.
*/

// ? Rule 1:
// JSX will return only one element
// we can use one parent element / Fragment.
/*
let App = () => {
  return (
    <>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
    </>
  );
};
export default App;
*/

// ? Rule 2:
// JSX elements are case sentive
/*
let App = () => {
  console.log("I am a Component");
  return <H1>I am a Component</H1>; // ! ERROR
};

export default App;
*/

// ? Rule 3:
// If we want we can use js variable into html by using expression
// js --- html  ====> return
// html --- js  ====> {}

// ? Rule 4:
// Every element should be unique.
// for unique reference we have to use key prop.

/*
let App = () => {
  let sname = "Keshav";
  let age = 20;
  let course = "React JS";
  let skills = ["html", "css", "js", "react js", "tailwind CSS"];
  console.log(sname);
  console.log(age);
  console.log(course);

  return (
    <>
      <h1>I am {sname}</h1>
      <h1>My age is {age}</h1>
      <h1>I opted for {course}</h1>
      My skills are:
      {skills.map((val, ind) => {
        console.log(val); // items
        console.log(ind); // indexes
        return (
          <li key={ind} type="circle">
            {val}
          </li>
        );
      })}
    </>
  );
};

export default App;
*/

// ? Rule 5:
// JSX follows lowercamel case conventions
// Ex: onClick , onMouseOver

// ? Rule 6:
// common words from html and javascript will change in jsx.
// ex: class ---> className , for ---> htmlFor

// ? Rule 7:
// All elements should be closed.
// ex: <input type="text" /> or <input type="text"></input
/*
let App = () => {
  let sname = "Shivani";
  return (
    <>
      <h1>I am a Component</h1>
      <h1>I am {sname}</h1>
      <button onClick={() => confirm("Do you want to click")}> Click Here </button>
      <button
        onMouseOver={() => {
          console.log("you hover on this button");
        }}
      > Mouse Over </button>

      <form>
        <label htmlFor="">User Name:</label>
        <input type="text" name="" id="" /> <br /> <br />
        <label htmlFor="">User Email:</label>
        <input type="text"></input>
        <input type="text" />
        <br /> <br />
        <hr /> <hr />
        <section id="mainContainer">
          <div className="demo">item 1</div>
          <div className="demo">item 2</div>
          <div className="demo">item 3</div>
          <div className="demo">item 4</div>
        </section>
      </form>
    </>
  );
};
export default App;
*/

// ! ============= props =============
/*
Inshort we call properties as props.
props are used to share the data from one component to another component.
*/

// ? === Passing Props ===
/*
import ChildComponent from "./ChildComponent";
import ChildComponent from './ChildComponent';
let App = () => {
  console.log("I am App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent sname="Shivani" age={20} course="React JS"></ChildComponent>
      <ChildComponent sname="Tanmay" age={22} course="Node JS"></ChildComponent>
      <ChildComponent sname="Ekash" age={23} course="All Courses"></ChildComponent>
      <ChildComponent sname="Nazme" age={22} course="No Courses"></ChildComponent>
    </>
  );
};
export default App;
*/

// ? ==== Props Children ====
// It is a way of sharing jsx elements from one component to another component.
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  console.log("I am App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Keshav">
        <h3>I am child -1</h3>
        <h3>I am child -2</h3>
        <h3>I am child -3</h3>
      </ChildComponent>
      <ChildComponent name="shubham">
        <h3>I am Child 2.1</h3>
        <h3>I am Child 2.2</h3>
        <h3>I am Child 2.3</h3>
      </ChildComponent>
    </>
  );
};
export default App;
*/

// ? === props Destructuring ===
//  Example 1:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Ekansh" age={20} course="React JS" />
      <ChildComponent name="Prabal" age={22} course="Node JS" />
      <ChildComponent name="Shivani" age={22} course="Express JS" />
    </>
  );
};
export default App;
*/

//  Example 2:
import ChildComponent from "./ChildComponent";
let App = () => {
  let sname = "Nazme";
  let course = "React JS";
  let isMarried = true;
  let kidsCount = null;
  let gender = "Male";

  let skills = {
    frontend: ["html", "css", "js", "Reactjs"],
    database: ["sql", "plsql", "mongodb"],
    backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
  };

  let hobbies = {
    dayTimeHobbies: {
      publicHobies: "Reading",
      privateHobies: "Snatching",
    },
    nightTimeHobbies: {
      parentKnows: "Marvals",
      parentDontKnows: "betting",
    },
  };

  let qualification = {
    matriculation: 85,
    intermediate: 82,
    graduation: 85,
  };

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={sname}
        course={course}
        isMarried={isMarried}
        kidsCount={kidsCount}
        gender={gender}
        skills={skills}
        hobbies={hobbies}
        qualification={qualification}
      />
    </>
  );
};
export default App;
