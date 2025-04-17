import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  let dispatch = useDispatch();

  let products = useSelector(state => state.products);
  console.log(products);

  let getProducts = async (dispatch, getState) => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };

  return (
    <>
      <h2>
        All Products List
        <button
          onClick={() => {
            dispatch(getProducts);
          }}
        >
          Click Here
        </button>
      </h2>
      <hr />

      {products.map((val, ind) => {
        return <li>{val.title}</li>;
      })}
    </>
  );
};

export default AllProducts;
