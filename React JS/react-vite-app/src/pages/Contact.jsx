import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>I am Contact Component</h1>
      <center>
        <pre>
          <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
        </pre>
      </center>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, dolores
        laudantium placeat eaque quod eius error explicabo tenetur dolor
        repellat repellendus illum sint hic nam ipsa neque impedit deserunt.
        Dignissimos iste nostrum fugiat! Incidunt ad eius corporis porro
        aspernatur at atque perferendis doloribus, sunt ex perspiciatis, maiores
        non, nesciunt quibusdam.
      </p>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink to="hrs">HR</NavLink>
        <NavLink to="trainers">Trainers</NavLink>
        <NavLink to="counsellors">Counsellor</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Contact;
