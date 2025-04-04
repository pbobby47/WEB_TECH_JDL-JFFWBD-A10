import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Products = ({ title, data }) => {
  let [cart, setCart] = useState([]);

  let AddToCart = val => {
    setCart([...cart, val]);
    toast.success(val.title, "Item added into card...");
  };

  let RemoveFromCart = val => {
    setCart(
      cart.filter(cartProduct => {
        return cartProduct.id != val.id;
      })
    );
    toast.error(val.title, "is removed from cart...");
  };

  return (
    <>
      <center>
        <h1>{title}</h1>
      </center>
      <hr />
      <center>
        <h2>Cart Items</h2>
      </center>
      <hr />

      <section id="products_UI">
        {cart.length > 0 ? (
          <>
            {cart.map((val, ind) => {
              console.log(val, ind);

              return (
                <article className="product" key={ind}>
                  <div className="imageBox">
                    <img src={val.image} alt="" height="100px" />
                  </div>
                  <div className="infoBox">
                    <p>{val.title.slice(0, 20)}...</p>
                    <button onClick={() => RemoveFromCart(val)}>
                      Remove From Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </>
        ) : (
          "No Items Available in the Cart"
        )}
      </section>

      <hr />
      <center>
        <h2>All Items</h2>
      </center>
      <hr />
      <section id="products_UI">
        {data.map((val, ind) => {
          console.log(val, ind);

          return (
            <article className="product" key={ind}>
              <div className="imageBox">
                <img src={val.image} alt="" height="100px" />
              </div>
              <div className="infoBox">
                <p>{val.title.slice(0, 20)}...</p>
                <button onClick={() => AddToCart(val)}>Add to Cart</button>
              </div>
            </article>
          );
        })}

        <ToastContainer />
      </section>
    </>
  );
};

export default Products;
