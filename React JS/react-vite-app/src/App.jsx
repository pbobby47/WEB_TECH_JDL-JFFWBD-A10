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
