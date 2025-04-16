// ! Example 1:
/*
import { createStore } from "redux";

//? initial State
let initialState = {
  counter: 0,
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
// console.log(store);

//? print the store data
console.log(store.getState()); // { counter : 0 }

// ? dispatching increment
store.dispatch({ type: "INCREMENT" });
console.log("After Increment 1", store.getState()); // {counter : 1 }

store.dispatch({ type: "INCREMENT" });
console.log("After Increment 2", store.getState()); // { counter : 2  }

store.dispatch({ type: "INCREMENT" });
console.log("After Increment 3", store.getState()); // { counter : 3 }

store.dispatch({ type: "Helllo" });
store.dispatch({ type: "update" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "world" });
console.log(store.getState()); // { counter : 3 }

// ? dispatching decrement
store.dispatch({ type: "DECREMENT" });
console.log("After Decrement 1", store.getState());

store.dispatch({ type: "DECREMENT" });
console.log("After Decrement 2", store.getState());

// ? dispatching reset
store.dispatch({ type: "RESET" });
console.log("After Reset", store.getState());
*/

// ! Example 2:
/*! 
import { createStore } from "redux";

//? initial State
let initialState = {
  counter: 0,
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
// console.log(store);

//? print the store data
console.log(store.getState()); // { counter : 0 }

// ? subscribe:
// It will invoke for every changes in state.

store.subscribe(() => {
  console.log("State changed ---- ", store.getState());
});

// ? dispatching increment
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

// ? dispatching decrement
store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "DECREMENT" });

// ? dispatching reset
store.dispatch({ type: "RESET" });
*/

// ! Example 3:

import { createStore } from "redux";

// ? initial state
let accountsInitialState = {
  fullName: "",
  mobile: null,
  balance: 0,
};
// ? reducer function
let accountsReducer = (state = accountsInitialState, action) => {
  switch (action.type) {
    case "UDPATE_NAME":
      return { ...state, fullName: action.payload };
    case "UDPATE_MOBILE":
      return { ...state, mobile: action.payload };
    case "UDPATE_BALANCE":
      return { ...state, balance: action.payload };
    case "RESET":
      return accountsInitialState;
    default:
      return state;
  }
};

// ? create store
let store = createStore(accountsReducer);
console.log(store);
console.log(store.getState());

// ? create subscribe
store.subscribe(() => {
  console.log("State changed ----------", store.getState());
});

// ? dispatching actions

store.dispatch({ type: "UDPATE_NAME", payload: "Amit" });
store.dispatch({ type: "UDPATE_MOBILE", payload: 9874561230 });
store.dispatch({ type: "UDPATE_BALANCE", payload: 50000 });
store.dispatch({ type: "RESET" });
