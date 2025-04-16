/*
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  let dispatch = useDispatch();

  let counterValue = useSelector(state => {
    console.log("I am useSelector() Hook");

    return state.counter;
  });

  console.log(counterValue);

  return (
    <>
      <h1>React-Redux Library</h1>
      <p>Official React bindings for Redux</p>

      <h2>Counter : {counterValue} </h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </>
  );
};

export default App;
*/

// ! ================== Actual Example ====================
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// importing actions
import {
  updatename,
  updatemobile,
  deposit,
  withdraw,
  ADD_TRANSACTION,
} from "../actions/actions";

const App = () => {
  let dispatch = useDispatch();

  let data = useSelector(state => {
    return state.account;
  });
  // console.log(data);

  let transactions = useSelector(state => {
    return state.transaction;
  });
  console.log(transactions);

  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [balance, setBalance] = useState("");

  return (
    <>
      <h1>I am from App Component</h1>
      <center>
        <h3>My Form</h3>
        <hr />

        <p>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(updatename(name));
              setName("");
            }}
          >
            Update Name
          </button>
        </p>
        <p>
          <input
            type="tel"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(updatemobile(mobile));
              setMobile("");
            }}
          >
            Update Mobile No
          </button>
        </p>
        <p>
          <input
            type="tel"
            value={balance}
            onChange={e => setBalance(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(deposit(balance));
              dispatch(
                ADD_TRANSACTION({
                  amount: balance,
                  type: "deposit",
                  date: new Date(),
                })
              );
              setBalance("");
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              dispatch(withdraw(balance));
              setBalance("");
            }}
          >
            Withdraw
          </button>
        </p>

        <h3>Account Details</h3>
        <hr />
        <table border="" cellPadding="10px" cellSpacing="0px">
          <thead>
            <tr>
              <th>Account Holder Name</th>
              <th>Mobile Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.mobile}</td>
              <td>{data.balance}</td>
            </tr>
          </tbody>
        </table>
      </center>

      <center>
        <h3>Transaction Details</h3>
        <hr />
        <table border="" cellPadding={"10px"} cellSpacing={"0px"}>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Account Holder Name</th>
              <th>Mobile Number</th>
              <th>Amount</th>
              <th>Type of Transaction</th>
              <th>Date of Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((obj, ind) => {
              return (
                <tr key={ind}>
                  <td>TR {ind + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.balance}</td>
                  <td>{obj.type}</td>
                  <td>{obj.date.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default App;
