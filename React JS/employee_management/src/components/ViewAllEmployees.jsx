import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ViewAllEmployees = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    let { data } = await axios.get("http://localhost:4000/employees");
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <center>
      <h1>All Employees Data</h1>

      <table border="1px" cellPadding="10px" cellSpacing="0px">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name </th>
            <th>Email </th>
            <th>Department</th>
            <th colSpan={3}>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, ind) => {
            console.log(val);

            let { id, name, email, department } = val;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name} </td>
                <td>{email}</td>
                <td>{department}</td>
                <td>
                  <NavLink to={`/viewsingle/${id}`}>
                    <button>View More</button>
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/update/${id}`}>
                    <button>Edit </button>
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={() => {
                      console.log("Deleting ", id, name);

                      axios.delete(`http://localhost:4000/employees/${id}`);
                      window.location.assign("http://localhost:5184/viewall");
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </center>
  );
};

export default ViewAllEmployees;
