// ! =============== Pure Component (CBC) ==========
/*
import { Component } from "react";

class RegularChild extends Component {
  render() {
    console.log("I am RegularChild Component");
    return <h3>I am Regular Child Component</h3>;
  }
}

export default RegularChild;
*/

// ! =============== Pure Component (FBC) ==========
import React from "react";

const RegularChild = () => {
  console.log("RegularChild");
  return <h2>I am RegularChild</h2>;
};

export default RegularChild;
