// ! =================== HOC =======================
/*
import React from "react";
const HOC = ComponentName => {
  return function counter(props) {
    console.log("I am from HOC");
    console.log(props.id);
    return <ComponentName id={props.id} sname="Amit" age={20} course="ReactJS"/>
  };
};
export default HOC;
*/

// ! ============= Counter Task using HOC ================
import React from "react";
import { useState } from "react";

const HOC = WrapperComponent => {
  return () => {
    let [counter, setCounter] = useState(0);

    let handleIncrement = () => {
      setCounter(counter + 1);
    };

    let handleReset = () => {
      setCounter(0);
    };

    let handleDecrement = () => {
      setCounter(counter - 1);
    };

    return (
      <WrapperComponent
        counter={counter}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
      />
    );
  };
};

export default HOC;
