// ! ============ Error Boundaries ============
import React from "react";
import Product from "./Product";

const Cart = () => {
  return (
    <section style={{ border: "solid blue", display: "flex", padding: "30px" }}>
      <h1>I am Cart One</h1>

      <Product name="pen" />
      <Product name="pencil" />
      <Product name="earaser" />
      <Product name="sharpner" />
    </section>
  );
};

export default Cart;
