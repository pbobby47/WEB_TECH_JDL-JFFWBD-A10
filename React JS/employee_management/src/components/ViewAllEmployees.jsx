import React, { useEffect, useState } from "react";

const ViewAllEmployees = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    let res = await fetch("http://localhost:4000/users");
    let data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>All Employees Data</h1>
      {console.log(data)}
      {data.map((val, ind) => {
        console.log(val);
      })}
    </>
  );
};

export default ViewAllEmployees;
