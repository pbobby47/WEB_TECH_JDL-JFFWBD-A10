// ! ============== Context API [Consuming using Consumer] ===============
/*
import { MyContext } from "./App";

const ChildComponentA = () => {
  return (
    <>
      <h2>I am ChildComponent A</h2>
      <MyContext.Consumer>
        {data => {
          console.log(data);
          return (
            <>
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
        }}
      </MyContext.Consumer>
    </>
  );
};

export default ChildComponentA;
*/

// ! =================== HOC =======================
import React from "react";
import HOC from "./HOC";

const ChildComponentA = props => {
  console.log("ChildComponentA");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponentA</h2>
      <h3>Id : {props.id}</h3>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
    </>
  );
};

export default HOC(ChildComponentA);
