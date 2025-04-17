import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

let initialState = {
  products: [],
  users: [],
};

let reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

let store = createStore(reducerFn, applyMiddleware(thunk));

export default store;
