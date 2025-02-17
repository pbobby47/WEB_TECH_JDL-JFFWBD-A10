// ! ============== Context API [Consuming using useContext() Hook] ===============
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
