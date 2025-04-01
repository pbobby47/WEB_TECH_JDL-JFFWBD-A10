import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  console.log(id);

  console.log(
    `Now we will get the data from the path address http://localhost:4000/employees/${id}`
  );

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  let handleChange = e => {
    console.log("updating employee");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let getData = async () => {
    let { data } = await axios.get(`http://localhost:4000/employees/${id}`);
    setFormData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let handleSubmit = e => {
    e.preventDefault();

    axios.put(`http://localhost:4000/employees/${id}`, formData);
    console.log("Data Updated Successfully..");
    navigate("/viewall");
  };

  return (
    <center>
      <h1>Udpate Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="department"
            value={formData.department}
            placeholder="Enter Your Department"
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit">Update Employee</button>
        </p>
      </form>
    </center>
  );
};

export default UpdateEmployee;
