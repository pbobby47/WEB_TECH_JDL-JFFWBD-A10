import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header
        style={{
          border: "solid red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 50px",
        }}
      >
        <img
          src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
          alt=""
          height="30px"
        />
        <h1>Welcome to Our Website</h1>
      </header>
      <nav
        style={{
          border: "solid red",
        }}
      >
        <nav id="mainNavBar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </nav>
      <section
        style={{
          border: "solid red",
          height: "70vh",
          display: "flex",
        }}
      >
        <aside style={{ border: "solid blue", width: "200px" }}>Aside</aside>
        <main style={{ border: "solid blue", flex: "1" }}>
          Main Content
          <Outlet />
        </main>
      </section>
      <footer
        style={{
          border: "solid red",
          height: "50px",
        }}
      >
        I am footer Content
      </footer>
    </>
  );
};

export default Dashboard;
