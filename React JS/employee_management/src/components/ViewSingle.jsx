import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewSingle = () => {
  let { id } = useParams();
  console.log(id);

  console.log(
    `Now i will make a request to http://localhost:4000/employees/${id}`
  );

  let [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
  });
  console.log(data);

  let getData = async () => {
    let { data } = await axios.get(`http://localhost:4000/employees/${id}`);
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <center>
        <h1>Hello {data.name}</h1>
        <p>
          Your Employee id is: <code>{data.id}</code>
        </p>
        <p>
          Your Email id is : <code>{data.email}</code>
        </p>
        <p>
          Your Department id is : <code>{data.department}</code>
        </p>
      </center>
    </>
  );
};

export default ViewSingle;
