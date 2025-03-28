import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateEmp = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  console.log(formData);

  let handleChange = e => {
    // console.log("Heyy, we are changing...");
    // console.log(e);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = e => {
    e.preventDefault();

    console.log("form submitted");

    axios.post("http://localhost:4000/employees", formData);

    // after posting
    setFormData({
      name: "",
      email: "",
      department: "",
    });
  };

  return (
    <center>
      <h1>Add New Employees Here</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </p>
        <p>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Your Department"
            required
          />
        </p>
        <p>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </center>
  );
};

export default CreateEmp;
