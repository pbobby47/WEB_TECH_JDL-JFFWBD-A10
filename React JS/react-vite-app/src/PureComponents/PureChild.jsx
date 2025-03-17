// ! =============== Pure Component (CBC) ==========
/*
import { PureComponent } from "react";

class PureChild extends PureComponent {
  render() {
    console.log("I am PureChild Component");
    return <h3>I am Pure Child Component</h3>;
  }
}

export default PureChild;
*/

// ! =============== Pure Component (FBC) ==========
import React from "react";

const PureChild = () => {
  console.log("PureChild");

  return <h2>I am PureChild</h2>;
};

export default React.memo(PureChild);
