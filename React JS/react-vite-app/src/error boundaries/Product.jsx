// ! ============ Error Boundaries ============
import React from "react";

const Product = props => {
  if (props.name === "bottle") {
    throw new Error("Sorry, Bottle is not a valid item");
  }

  return (
    <article style={{ border: "solid", height: "150px", width: "100px" }}>
      <div>{props.name} image</div>
      <div>bottom part</div>
    </article>
  );
};

export default Product;
