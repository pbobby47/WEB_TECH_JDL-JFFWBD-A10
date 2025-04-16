// ! Example 1:
// ? counter Example
/*
import { createStore } from "redux";

//? initial State
let initialState = {
  counter: 0,
  counter2: 10,
};

//? reducer function
let counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

//? to create store
let store = createStore(counterReducer);

export default store;
*/

// ! ================== Actual Example ==================
import { combineReducers, createStore } from "redux";

// ? Initial state
let accountInitialState = {
  name: "",
  mobile: "",
  balance: 0,
};

// ? reducer functions
let accountReducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_MOBILE":
      return { ...state, mobile: action.payload };
    case "DEPOSIT":
      return { ...state, balance: state.balance + +action.payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - +action.payload };
    default:
      return state;
  }
};

// ? initial state
let transactionInitialState = [];

// ? reducer
let trasactionReducer = (state = transactionInitialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    default:
      return state;
  }
};

let rootReducer = combineReducers({
  account: accountReducer,
  transaction: trasactionReducer,
});

// ? create store
let store = createStore(rootReducer);
export default store;
