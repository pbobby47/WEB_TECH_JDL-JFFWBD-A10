// ! =============== Pure Component (CBC) ==========
/*
import { Component } from "react";
import PureChild from "./PureChild";
import RegularChild from "./RegularChild";

class PureParent extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  render() {
    console.log("I am PureParent Component");
    return (
      <>
        <h1>I am Pure Parent Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update
        </button>
        <PureChild />
        <RegularChild />
      </>
    );
  }
}

export default PureParent;
*/

// ! =============== Pure Components (FBC) ==================
import React, { useState } from "react";
import PureChild from "./PureChild";
import RegularChild from "./RegularChild";

const PureParent = () => {
  console.log("PureParent");
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>I am PureParent Component</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>

      <PureChild />
      <RegularChild />
    </>
  );
};

export default PureParent;
