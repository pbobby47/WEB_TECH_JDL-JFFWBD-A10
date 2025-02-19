// ! ============== Context API [Consuming using useContext() Hook] ===============
/*
import { useContext } from "react";
import { MyContext } from "./App";

const ChildComponentB = () => {
  let data = useContext(MyContext);
  console.log(data);

  return (
    <>
      <h2>I am ChildComponentB</h2>
      <h2>Products</h2>
      {data.map((val, ind) => {
        console.log(val, ind);
        return (
          <div key={ind}>
            <p>Title : {val.title}</p>
            <p>Category : {val.category}</p>
            <p>Price : {val.price}</p>
            <p>Rating : {val.rating.rate}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ChildComponentB;
*/

// ! =================== HOC =======================
/*
import React from "react";
import HOC from "./HOC";

const ChildComponentB = props => {
  console.log("ChildComponentB");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponentB</h2>
      <h3>Id : {props.id}</h3>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
    </>
  );
};

export default HOC(ChildComponentB);
*/

// ! ============= Counter Task using HOC ================
import React from "react";
import HOC from "./HOC";

const ChildComponentB = props => {
  console.log(props);
  return (
    <>
      <h2>I am ChildComponentB</h2>
      <h2>Counter B : {props.counter}</h2>
      <button onClick={props.handleDecrement}>Decrement</button>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handleIncrement}>Increment</button>
    </>
  );
};

export default HOC(ChildComponentB);
