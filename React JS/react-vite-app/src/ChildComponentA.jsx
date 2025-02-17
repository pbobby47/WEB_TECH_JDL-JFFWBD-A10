// ! ============== Context API [Consuming using Consumer] ===============
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
