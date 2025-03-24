import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header style={{ border: "solid red", height: "50px" }}>
        This is Header Part
      </header>
      <nav
        style={{
          border: "solid red",
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 30px",
        }}
      >
        <div>Logo</div>
        <div
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          <NavLink>Create Employees</NavLink>
          <NavLink>View All Employees</NavLink>
        </div>
      </nav>
      <section style={{ border: "solid red", height: "330px" }}>
        section
        <Outlet></Outlet>
      </section>
      <footer style={{ border: "solid red", height: "50px" }}>
        This is the footer
      </footer>
    </>
  );
};

export default Dashboard;
